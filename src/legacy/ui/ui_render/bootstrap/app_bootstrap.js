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

import Handlebars from 'handlebars';
import { createHash } from 'crypto';
import { readFile } from 'fs';
import { resolve } from 'path';

import { osdBundlesLoaderSource } from './osd_bundles_loader_source';

export class AppBootstrap {
  constructor({ templateData }, templateName = 'bootstrap') {
    this.templateData = { ...templateData, osdBundlesLoaderSource };
    this._rawTemplate = undefined;
    this.templateName = templateName;
  }

  async getJsFile() {
    if (!this._rawTemplate) {
      this._rawTemplate = await loadRawTemplate(this.templateName);
    }

    const template = Handlebars.compile(this._rawTemplate, {
      knownHelpersOnly: true,
      noEscape: true, // this is a js file, so html escaping isn't appropriate
      strict: true,
    });

    return template(this.templateData);
  }

  async getJsFileHash() {
    const fileContents = await this.getJsFile();
    const hash = createHash('sha1');
    hash.update(fileContents);
    return hash.digest('hex');
  }
}

function loadRawTemplate(templateName) {
  const templatePath = resolve(__dirname, `${templateName}.js.hbs`);
  return readFileAsync(templatePath);
}

function readFileAsync(filePath) {
  return new Promise((resolve, reject) => {
    readFile(filePath, 'utf8', (err, fileContents) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(fileContents);
    });
  });
}
