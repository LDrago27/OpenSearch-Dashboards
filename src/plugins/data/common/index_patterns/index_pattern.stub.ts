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

import { IIndexPattern } from '.';
import { stubFields } from './field.stub';

export const stubIndexPattern: IIndexPattern = {
  id: 'logstash-*',
  fields: stubFields,
  title: 'logstash-*',
  timeFieldName: '@timestamp',
  getFieldByName: (name: string) => stubFields.find((field) => field.name === name),
  getComputedFields: () => ({}),
  getScriptedFields: () => stubFields.filter((field) => field.scripted),
  getNonScriptedFields: () => stubFields.filter((field) => !field.scripted),
  addScriptedField: async () => {},
  removeScriptedField: () => {},
};

export const stubIndexPatternWithFields: IIndexPattern = {
  id: '1234',
  title: 'logstash-*',
  fields: [
    {
      name: 'response',
      type: 'number',
      esTypes: ['integer'],
      aggregatable: true,
      filterable: true,
      searchable: true,
    },
  ],
  getFieldByName(name: string) {
    return this.fields.find((field) => field.name === name);
  },
  getComputedFields: () => ({}),
  getScriptedFields() {
    return this.fields.filter((field) => field.scripted);
  },
  getNonScriptedFields() {
    return this.fields.filter((field) => !field.scripted);
  },
  addScriptedField: async () => {},
  removeScriptedField: () => {},
};
