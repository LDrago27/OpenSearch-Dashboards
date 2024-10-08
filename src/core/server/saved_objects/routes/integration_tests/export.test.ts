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

import { dynamicConfigServiceMock } from '../../../config/dynamic_config_service.mock';

jest.mock('../../export', () => ({
  exportSavedObjectsToStream: jest.fn(),
}));

import * as exportMock from '../../export';
import { createListStream } from '../../../utils/streams';
import supertest from 'supertest';
import { UnwrapPromise } from '@osd/utility-types';
import { SavedObjectConfig } from '../../saved_objects_config';
import { registerExportRoute } from '../export';
import { setupServer, createExportableType } from '../test_utils';

type SetupServerReturn = UnwrapPromise<ReturnType<typeof setupServer>>;
const exportSavedObjectsToStream = exportMock.exportSavedObjectsToStream as jest.Mock;
const allowedTypes = ['index-pattern', 'search'];
const config = {
  maxImportPayloadBytes: 26214400,
  maxImportExportSize: 10000,
} as SavedObjectConfig;

describe('POST /api/saved_objects/_export', () => {
  let server: SetupServerReturn['server'];
  let httpSetup: SetupServerReturn['httpSetup'];
  let handlerContext: SetupServerReturn['handlerContext'];

  beforeEach(async () => {
    ({ server, httpSetup, handlerContext } = await setupServer());
    handlerContext.savedObjects.typeRegistry.getImportableAndExportableTypes.mockReturnValue(
      allowedTypes.map(createExportableType)
    );

    const router = httpSetup.createRouter('/api/saved_objects/');
    registerExportRoute(router, config);

    const dynamicConfigService = dynamicConfigServiceMock.createInternalStartContract();
    await server.start({ dynamicConfigService });
  });

  afterEach(async () => {
    jest.clearAllMocks();
    await server.stop();
  });

  it('formats successful response', async () => {
    const sortedObjects = [
      {
        id: '1',
        type: 'index-pattern',
        attributes: {},
        references: [],
      },
      {
        id: '2',
        type: 'search',
        attributes: {},
        references: [
          {
            name: 'ref_0',
            type: 'index-pattern',
            id: '1',
          },
        ],
      },
    ];
    exportSavedObjectsToStream.mockResolvedValueOnce(createListStream(sortedObjects));

    const result = await supertest(httpSetup.server.listener)
      .post('/api/saved_objects/_export')
      .send({
        type: 'search',
        search: 'my search string',
        includeReferencesDeep: true,
      });

    expect(result.status).toBe(200);
    expect(result.header).toEqual(
      expect.objectContaining({
        'content-disposition': 'attachment; filename="export.ndjson"',
        'content-type': 'application/ndjson',
      })
    );

    const objects = (result.text as string).split('\n').map((row) => JSON.parse(row));
    expect(objects).toEqual(sortedObjects);
    expect(exportSavedObjectsToStream.mock.calls[0][0]).toEqual(
      expect.objectContaining({
        excludeExportDetails: false,
        exportSizeLimit: 10000,
        includeReferencesDeep: true,
        objects: undefined,
        search: 'my search string',
        types: ['search'],
      })
    );
  });
});
