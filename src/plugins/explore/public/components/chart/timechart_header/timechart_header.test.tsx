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

import React from 'react';
import { mountWithIntl } from 'test_utils/enzyme_helpers';
import { ReactWrapper } from 'enzyme';
import { TimechartHeader, TimechartHeaderProps } from './timechart_header';
import { EuiIconTip } from '@elastic/eui';
import { findTestSubject } from 'test_utils/helpers';
import { DiscoverChartToggleId } from '../utils/use_persist_chart_state';

describe('timechart header', function () {
  let props: TimechartHeaderProps;
  let component: ReactWrapper<TimechartHeaderProps>;

  beforeAll(() => {
    props = {
      timeRange: {
        from: 'May 14, 2020 @ 11:05:13.590',
        to: 'May 14, 2020 @ 11:20:13.590',
      },
      stateInterval: 's',
      options: [
        {
          display: 'Auto',
          val: 'auto',
        },
        {
          display: 'Millisecond',
          val: 'ms',
        },
        {
          display: 'Second',
          val: 's',
        },
      ],
      onChangeInterval: jest.fn(),
      bucketInterval: {
        scaled: undefined,
        description: 'second',
        scale: undefined,
      },
      toggleIdSelected: 'histogram' as DiscoverChartToggleId,
      additionalControl: null,
    };
  });

  it('TimechartHeader not renders an info text when the showScaledInfo property is not provided', () => {
    component = mountWithIntl(<TimechartHeader {...props} />);
    expect(component.find(EuiIconTip).length).toBe(0);
  });

  it('TimechartHeader renders an info when bucketInterval.scale is set to true', () => {
    props.bucketInterval!.scaled = true;
    component = mountWithIntl(<TimechartHeader {...props} />);
    expect(component.find(EuiIconTip).length).toBe(1);
  });

  it('expect to render the date range', function () {
    component = mountWithIntl(<TimechartHeader {...props} />);
    const datetimeRangeText = findTestSubject(component, 'discoverIntervalDateRange');
    expect(datetimeRangeText.text()).toBe(
      'May 14, 2020 @ 11:05:13.590 - May 14, 2020 @ 11:20:13.590 per'
    );
  });

  it('should not render interval selector when toggleIdSelected is not histogram', function () {
    const updatedProps = {
      ...props,
      toggleIdSelected: 'summary' as DiscoverChartToggleId,
    };
    component = mountWithIntl(<TimechartHeader {...updatedProps} />);
    const intervalSelect = findTestSubject(component, 'discoverIntervalSelect');
    expect(intervalSelect.length).toBe(0);
  });

  it('should render log count text', function () {
    component = mountWithIntl(<TimechartHeader {...props} />);
    const logCountText = findTestSubject(component, 'discoverTimechartHeaderLogCount');
    expect(logCountText.text()).toBe('Log count');
  });

  it('expects to render a dropdown with the interval options', () => {
    component = mountWithIntl(<TimechartHeader {...props} />);
    const dropdown = findTestSubject(component, 'discoverIntervalSelect');
    expect(dropdown.length).toBe(1);
    // @ts-ignore
    const values = dropdown.find('option').map((option) => option.prop('value'));
    expect(values).toEqual(['auto', 'ms', 's']);
    // @ts-ignore
    const labels = dropdown.find('option').map((option) => option.text());
    expect(labels).toEqual(['Auto', 'Millisecond', 'Second']);
  });

  it('should change the interval', function () {
    component = mountWithIntl(<TimechartHeader {...props} />);
    findTestSubject(component, 'discoverIntervalSelect').simulate('change', {
      target: { value: 'ms' },
    });
    expect(props.onChangeInterval).toHaveBeenCalled();
  });
});
