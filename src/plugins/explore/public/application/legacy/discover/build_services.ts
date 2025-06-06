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

import { History } from 'history';

import {
  Capabilities,
  ChromeStart,
  CoreStart,
  DocLinksStart,
  ToastsStart,
  IUiSettingsClient,
  PluginInitializerContext,
} from 'opensearch-dashboards/public';
import {
  FilterManager,
  TimefilterContract,
  IndexPatternsContract,
  DataPublicPluginStart,
} from '../../../../../data/public';
import { Start as InspectorPublicPluginStart } from '../../../../../inspector/public';
import { SharePluginStart } from '../../../../../share/public';
import { ChartsPluginStart } from '../../../../../charts/public';
import { UiActionsStart } from '../../../../../ui_actions/public';
import { VisualizationsStart } from '../../../../../visualizations/public';
import { SavedObjectOpenSearchDashboardsServices } from '../../../../../saved_objects/public';

import { createSavedExploreLoader, SavedExplore } from '../../..';
import { getHistory } from './opensearch_dashboards_services';
import { OpenSearchDashboardsLegacyStart } from '../../../../../opensearch_dashboards_legacy/public';
import { UrlForwardingStart } from '../../../../../url_forwarding/public';
import { NavigationPublicPluginStart } from '../../../../../navigation/public';
import { DataExplorerServices } from '../data_explorer';
import { Storage } from '../../../../../opensearch_dashboards_utils/public';
import { DiscoverStartPlugins } from './types';

export interface DiscoverServices {
  addBasePath: (path: string) => string;
  capabilities: Capabilities;
  chrome: ChromeStart;
  core: CoreStart;
  data: DataPublicPluginStart;
  docLinks: DocLinksStart;
  history: () => History;
  theme: ChartsPluginStart['theme'];
  filterManager: FilterManager;
  indexPatterns: IndexPatternsContract;
  inspector: InspectorPublicPluginStart;
  metadata: { branch: string };
  navigation: NavigationPublicPluginStart;
  share?: SharePluginStart;
  opensearchDashboardsLegacy: OpenSearchDashboardsLegacyStart;
  urlForwarding: UrlForwardingStart;
  timefilter: TimefilterContract;
  toastNotifications: ToastsStart;
  getSavedSearchById: (id?: string) => Promise<SavedExplore>;
  getSavedSearchUrlById: (id: string) => Promise<string>;
  uiSettings: IUiSettingsClient;
  visualizations: VisualizationsStart;
  storage: Storage;
  uiActions: UiActionsStart;
}

export function buildServices(
  core: CoreStart,
  plugins: DiscoverStartPlugins,
  context: PluginInitializerContext
): DiscoverServices {
  const services: SavedObjectOpenSearchDashboardsServices = {
    savedObjectsClient: core.savedObjects.client,
    indexPatterns: plugins.data.indexPatterns,
    search: plugins.data.search,
    chrome: core.chrome,
    overlays: core.overlays,
  };
  const savedObjectService = createSavedExploreLoader(services);
  const storage = new Storage(localStorage);

  return {
    addBasePath: core.http.basePath.prepend,
    capabilities: core.application.capabilities,
    chrome: core.chrome,
    core,
    data: plugins.data,
    docLinks: core.docLinks,
    theme: plugins.charts.theme,
    filterManager: plugins.data.query.filterManager,
    getSavedSearchById: async (id?: string) => savedObjectService.get(id),
    getSavedSearchUrlById: async (id: string) => savedObjectService.urlFor(id),
    history: getHistory,
    indexPatterns: plugins.data.indexPatterns,
    inspector: plugins.inspector,
    metadata: {
      branch: context.env.packageInfo.branch,
    },
    navigation: plugins.navigation,
    share: plugins.share,
    opensearchDashboardsLegacy: plugins.opensearchDashboardsLegacy,
    urlForwarding: plugins.urlForwarding,
    timefilter: plugins.data.query.timefilter.timefilter,
    toastNotifications: core.notifications.toasts,
    uiSettings: core.uiSettings,
    visualizations: plugins.visualizations,
    storage,
    uiActions: plugins.uiActions,
  };
}

// Any component inside the panel and canvas views has access to both these services.
export type DiscoverViewServices = DiscoverServices & DataExplorerServices;
