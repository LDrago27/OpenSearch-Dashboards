/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { get, noop, find, every } from 'lodash';
import moment from 'moment-timezone';
import { i18n } from '@osd/i18n';

import { OSD_FIELD_TYPES, TimeRange, TimeRangeBounds, UI_SETTINGS } from '../../../../common';

import { intervalOptions, autoInterval, isAutoInterval } from './_interval_options';
import { createFilterDateHistogram } from './create_filter/date_histogram';
import { BucketAggType, IBucketAggConfig } from './bucket_agg_type';
import { BUCKET_TYPES } from './bucket_agg_types';
import { ExtendedBounds } from './lib/extended_bounds';
import { TimeBuckets } from './lib/time_buckets';

import { writeParams } from '../agg_params';
import { isMetricAggType } from '../metrics/metric_agg_type';
import { BaseAggParams } from '../types';
import { dateHistogramInterval } from '../utils';

/** @internal */
export type CalculateBoundsFn = (timeRange: TimeRange) => TimeRangeBounds;

const updateTimeBuckets = (
  agg: IBucketDateHistogramAggConfig,
  calculateBounds: CalculateBoundsFn,
  customBuckets?: IBucketDateHistogramAggConfig['buckets']
) => {
  const bounds =
    agg.params.timeRange && (agg.fieldIsTimeField() || isAutoInterval(agg.params.interval))
      ? calculateBounds(agg.params.timeRange)
      : undefined;
  const buckets = customBuckets || agg.buckets;
  buckets.setBounds(bounds);
  buckets.setInterval(agg.params.interval);
};

export interface DateHistogramBucketAggDependencies {
  calculateBounds: CalculateBoundsFn;
  isDefaultTimezone: () => boolean;
  getConfig: <T = any>(key: string) => T;
}

export interface IBucketDateHistogramAggConfig extends IBucketAggConfig {
  buckets: TimeBuckets;
}

export function isDateHistogramBucketAggConfig(agg: any): agg is IBucketDateHistogramAggConfig {
  return Boolean(agg.buckets);
}

export interface AggParamsDateHistogram extends BaseAggParams {
  field?: string;
  timeRange?: TimeRange;
  useNormalizedOpenSearchInterval?: boolean;
  scaleMetricValues?: boolean;
  interval?: string;
  time_zone?: string;
  drop_partials?: boolean;
  format?: string;
  min_doc_count?: number;
  extended_bounds?: ExtendedBounds;
}

export const getDateHistogramBucketAgg = ({
  calculateBounds,
  isDefaultTimezone,
  getConfig,
}: DateHistogramBucketAggDependencies) =>
  new BucketAggType<IBucketDateHistogramAggConfig>({
    name: BUCKET_TYPES.DATE_HISTOGRAM,
    title: i18n.translate('data.search.aggs.buckets.dateHistogramTitle', {
      defaultMessage: 'Date Histogram',
    }),
    ordered: {
      date: true,
    },
    makeLabel(agg) {
      let output: Record<string, any> = {};

      if (this.params) {
        output = writeParams(this.params, agg);
      }

      const field = agg.getFieldDisplayName();

      return i18n.translate('data.search.aggs.buckets.dateHistogramLabel', {
        defaultMessage: '{fieldName} per {intervalDescription}',
        values: {
          fieldName: field,
          intervalDescription: output.metricScaleText || output.bucketInterval.description,
        },
      });
    },
    createFilter: createFilterDateHistogram,
    decorateAggConfig() {
      let buckets: any;

      return {
        buckets: {
          configurable: true,
          get() {
            if (buckets) return buckets;

            buckets = new TimeBuckets({
              'histogram:maxBars': getConfig(UI_SETTINGS.HISTOGRAM_MAX_BARS),
              'histogram:barTarget': getConfig(UI_SETTINGS.HISTOGRAM_BAR_TARGET),
              dateFormat: getConfig(UI_SETTINGS.DATE_FORMAT),
              'dateFormat:scaled': getConfig('dateFormat:scaled'),
            });
            updateTimeBuckets(this, calculateBounds, buckets);

            return buckets;
          },
        } as any,
      };
    },
    getSerializedFormat(agg) {
      return {
        id: 'date',
        params: {
          pattern: agg.buckets.getScaledDateFormat(),
        },
      };
    },
    params: [
      {
        name: 'field',
        type: 'field',
        filterFieldTypes: OSD_FIELD_TYPES.DATE,
        default(agg: IBucketDateHistogramAggConfig) {
          return agg.getIndexPattern().timeFieldName;
        },
        onChange(agg: IBucketDateHistogramAggConfig) {
          if (isAutoInterval(get(agg, 'params.interval')) && !agg.fieldIsTimeField()) {
            delete agg.params.interval;
          }
        },
      },
      {
        name: 'timeRange',
        default: null,
        write: noop,
      },
      {
        name: 'useNormalizedOpenSearchInterval',
        default: true,
        write: noop,
      },
      {
        name: 'scaleMetricValues',
        default: false,
        write: noop,
        advanced: true,
      },
      {
        name: 'interval',
        deserialize(state: any, agg) {
          // For upgrading from 7.0.x to 7.1.x - intervals are now stored as key of options or custom value
          if (state === 'custom') {
            return get(agg, 'params.customInterval');
          }

          const interval = find(intervalOptions, { val: state });

          // For upgrading from 4.0.x to 4.1.x - intervals are now stored as 'y' instead of 'year',
          // but this maps the old values to the new values
          if (!interval && state === 'year') {
            return 'y';
          }
          return state;
        },
        default: autoInterval,
        options: intervalOptions,
        write(agg, output, aggs) {
          updateTimeBuckets(agg, calculateBounds);

          const { useNormalizedOpenSearchInterval, scaleMetricValues } = agg.params;
          const interval = agg.buckets.getInterval(useNormalizedOpenSearchInterval);
          output.bucketInterval = interval;
          if (interval.expression === '0ms') {
            // We are hitting this code a couple of times while configuring in editor
            // with an interval of 0ms because the overall time range has not yet been
            // set. Since 0ms is not a valid OpenSearch interval, we cannot pass it through dateHistogramInterval
            // below, since it would throw an exception. So in the cases we still have an interval of 0ms
            // here we simply skip the rest of the method and never write an interval into the DSL, since
            // this DSL will anyway not be used before we're passing this code with an actual interval.
            return;
          }
          output.params = {
            ...output.params,
            ...dateHistogramInterval(interval.expression),
          };

          const scaleMetrics =
            scaleMetricValues && interval.scaled && interval.scale && interval.scale < 1;
          if (scaleMetrics && aggs) {
            const metrics = aggs.aggs.filter((a) => isMetricAggType(a.type));
            const all = every(metrics, (a: IBucketAggConfig) => {
              const { type } = a;

              if (isMetricAggType(type)) {
                return type.isScalable();
              }
            });
            if (all) {
              output.metricScale = interval.scale;
              output.metricScaleText = interval.preScaled?.description || '';
            }
          }
        },
      },
      {
        name: 'time_zone',
        default: undefined,
        // We don't ever want this parameter to be serialized out (when saving or to URLs)
        // since we do all the logic handling it "on the fly" in the `write` method, to prevent
        // time_zones being persisted into saved_objects
        serialize: noop,
        write(agg, output) {
          // If a time_zone has been set explicitly always prefer this.
          let tz = agg.params.time_zone;
          if (!tz && agg.params.field) {
            // If a field has been configured check the index pattern's typeMeta if a date_histogram on that
            // field requires a specific time_zone
            tz = get(agg.getIndexPattern(), [
              'typeMeta',
              'aggs',
              'date_histogram',
              agg.params.field.name,
              'time_zone',
            ]);
          }
          if (!tz) {
            // If the index pattern typeMeta data, didn't had a time zone assigned for the selected field use the configured tz
            const detectedTimezone = moment.tz.guess();
            const tzOffset = moment().format('Z');
            tz = isDefaultTimezone() ? detectedTimezone || tzOffset : getConfig('dateFormat:tz');
          }
          output.params.time_zone = tz;
        },
      },
      {
        name: 'drop_partials',
        default: false,
        write: noop,
        shouldShow: (agg) => {
          const field = agg.params.field;
          return field && field.name && field.name === agg.getIndexPattern().timeFieldName;
        },
      },
      {
        name: 'format',
      },
      {
        name: 'min_doc_count',
        default: 1,
      },
      {
        name: 'extended_bounds',
        default: {},
        write(agg, output) {
          const val = agg.params.extended_bounds;

          if (val.min != null || val.max != null) {
            output.params.extended_bounds = {
              min: moment(val.min).valueOf(),
              max: moment(val.max).valueOf(),
            };

            return;
          }
        },
      },
    ],
  });
