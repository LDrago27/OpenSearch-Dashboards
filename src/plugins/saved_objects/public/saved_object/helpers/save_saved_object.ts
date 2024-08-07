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

import {
  SavedObject,
  SavedObjectConfig,
  SavedObjectOpenSearchDashboardsServices,
  SavedObjectSaveOpts,
} from '../../types';
import { OVERWRITE_REJECTED, SAVE_DUPLICATE_REJECTED } from '../../constants';
import { createSource } from './create_source';
import { checkForDuplicateTitle } from './check_for_duplicate_title';

/**
 * @param error {Error} the error
 * @return {boolean}
 */
export function isErrorNonFatal(error: { message: string }) {
  if (!error) return false;
  return error.message === OVERWRITE_REJECTED || error.message === SAVE_DUPLICATE_REJECTED;
}

/**
 * Saves this object.
 *
 * @param {string} [opensearchType]
 * @param {SavedObject} [savedObject]
 * @param {SavedObjectConfig} [config]
 * @param {object} [options={}]
 * @property {boolean} [options.confirmOverwrite=false] - If true, attempts to create the source so it
 * can confirm an overwrite if a document with the id already exists.
 * @property {boolean} [options.isTitleDuplicateConfirmed=false] - If true, save allowed with duplicate title
 * @property {func} [options.onTitleDuplicate] - function called if duplicate title exists.
 * When not provided, confirm modal will be displayed asking user to confirm or cancel save.
 * @param {SavedObjectOpenSearchDashboardsServices} [services]
 * @return {Promise}
 * @resolved {String} - The id of the doc
 */
export async function saveSavedObject(
  savedObject: SavedObject,
  config: SavedObjectConfig,
  {
    confirmOverwrite = false,
    isTitleDuplicateConfirmed = false,
    onTitleDuplicate,
  }: SavedObjectSaveOpts = {},
  services: SavedObjectOpenSearchDashboardsServices
): Promise<string> {
  const { savedObjectsClient, chrome } = services;

  const opensearchType = config.type || '';
  const extractReferences = config.extractReferences;
  // Save the original id in case the save fails.
  const originalId = savedObject.id;
  // Read https://github.com/elastic/kibana/issues/9056 and
  // https://github.com/elastic/kibana/issues/9012 for some background into why this copyOnSave variable
  // exists.
  // The goal is to move towards a better rename flow, but since our users have been conditioned
  // to expect a 'save as' flow during a rename, we are keeping the logic the same until a better
  // UI/UX can be worked out.
  if (savedObject.copyOnSave) {
    delete savedObject.id;
  }

  // Here we want to extract references and set them within "references" attribute
  let { attributes, references } = savedObject._serialize();
  if (extractReferences) {
    ({ attributes, references } = extractReferences({ attributes, references }));
  }
  if (!references) throw new Error('References not returned from extractReferences');

  try {
    await checkForDuplicateTitle(
      savedObject,
      isTitleDuplicateConfirmed,
      onTitleDuplicate,
      services
    );
    savedObject.isSaving = true;
    const resp = confirmOverwrite
      ? await createSource(
          attributes,
          savedObject,
          opensearchType,
          savedObject.creationOpts({ references }),
          services
        )
      : await savedObjectsClient.create(
          opensearchType,
          attributes,
          savedObject.creationOpts({ references, overwrite: true })
        );

    savedObject.id = resp.id;
    if (savedObject.showInRecentlyAccessed && savedObject.getFullPath) {
      chrome.recentlyAccessed.add(
        savedObject.getFullPath(),
        savedObject.title,
        String(savedObject.id),
        {
          type: savedObject.getOpenSearchType(),
        }
      );
    }
    savedObject.isSaving = false;
    savedObject.lastSavedTitle = savedObject.title;
    return savedObject.id;
  } catch (err) {
    savedObject.isSaving = false;
    savedObject.id = originalId;
    if (isErrorNonFatal(err)) {
      return '';
    }
    return Promise.reject(err);
  }
}
