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

import supertest from 'supertest';
import { UnwrapPromise } from '@osd/utility-types';
import { registerUpdateRoute } from '../update';
import { savedObjectsClientMock } from '../../../../../core/server/mocks';
import { setupServer } from '../test_utils';
import { dynamicConfigServiceMock } from '../../../config/dynamic_config_service.mock';

type SetupServerReturn = UnwrapPromise<ReturnType<typeof setupServer>>;

describe('PUT /api/saved_objects/{type}/{id?}', () => {
  let server: SetupServerReturn['server'];
  let httpSetup: SetupServerReturn['httpSetup'];
  let handlerContext: SetupServerReturn['handlerContext'];
  let savedObjectsClient: ReturnType<typeof savedObjectsClientMock.create>;

  beforeEach(async () => {
    const clientResponse = {
      id: 'logstash-*',
      title: 'logstash-*',
      type: 'logstash-type',
      attributes: {},
      timeFieldName: '@timestamp',
      notExpandable: true,
      references: [],
    };

    ({ server, httpSetup, handlerContext } = await setupServer());
    savedObjectsClient = handlerContext.savedObjects.client;
    savedObjectsClient.update.mockResolvedValue(clientResponse);

    const router = httpSetup.createRouter('/api/saved_objects/');
    registerUpdateRoute(router);

    const dynamicConfigService = dynamicConfigServiceMock.createInternalStartContract();
    await server.start({ dynamicConfigService });
  });

  afterEach(async () => {
    await server.stop();
  });

  it('formats successful response', async () => {
    const clientResponse = {
      id: 'logstash-*',
      title: 'logstash-*',
      type: 'logstash-type',
      timeFieldName: '@timestamp',
      notExpandable: true,
      attributes: {},
      references: [],
    };
    savedObjectsClient.update.mockResolvedValue(clientResponse);

    const result = await supertest(httpSetup.server.listener)
      .put('/api/saved_objects/index-pattern/logstash-*')
      .send({
        attributes: {
          title: 'Testing',
        },
        references: [],
      })
      .expect(200);

    expect(result.body).toEqual(clientResponse);
  });

  it('calls upon savedObjectClient.update', async () => {
    await supertest(httpSetup.server.listener)
      .put('/api/saved_objects/index-pattern/logstash-*')
      .send({
        attributes: { title: 'Testing' },
        version: 'foo',
      })
      .expect(200);

    expect(savedObjectsClient.update).toHaveBeenCalledWith(
      'index-pattern',
      'logstash-*',
      { title: 'Testing' },
      { version: 'foo' }
    );
  });
});
