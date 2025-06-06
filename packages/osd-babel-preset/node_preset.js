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

const pathAliasPlugin = require('./path_alias');

module.exports = (_, options = {}) => {
  return {
    presets: [
      [
        require.resolve('@babel/preset-env'),
        {
          targets: {
            // only applies the necessary transformations based on the
            // current node.js processes version. For example: running
            // `nvm install 8 && node ./src/cli` will run OpenSearch Dashboards
            // in node version 8 and babel will stop transpiling async/await
            // because they are supported in the "current" version of node
            node: 14,
          },

          // replaces `import "core-js/stable"` with a list of require statements
          // for just the polyfills that the target versions don't already supply
          // on their own
          useBuiltIns: 'entry',
          modules: 'cjs',
          // right now when using `corejs: 3` babel does not use the latest available
          // core-js version due to a bug: https://github.com/babel/babel/issues/10816
          // Because of that we should use for that value the same version we install
          // in the package.json in order to have the same polyfills between the environment
          // and the tests
          corejs: '3.2.1',

          ...(options['@babel/preset-env'] || {}),
        },
      ],
      require('./common_preset'),
    ],
    plugins: [pathAliasPlugin(options['babel-plugin-module-resolver'])],
  };
};
