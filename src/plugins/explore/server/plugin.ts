/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  PluginInitializerContext,
  CoreSetup,
  CoreStart,
  Plugin,
  Logger,
} from '../../../core/server';
import { capabilitiesProvider } from './capabilities_provider';
import { exploreSavedObjectType } from './saved_objects';
import { traceUiSettings } from './trace_ui_settings';

import { ExplorePluginSetup, ExplorePluginStart } from './types';
import { AiDelightServerSetup } from '../../ai_delight/server';
import { fixQueryError } from './ai_delights/fix_query_error';

interface ExploreServerSetupDeps {
  aiDelight?: AiDelightServerSetup;
}

export class ExplorePlugin implements Plugin<ExplorePluginSetup, ExplorePluginStart> {
  private readonly logger: Logger;

  // @ts-ignore
  constructor(private readonly initializerContext: PluginInitializerContext) {
    this.logger = initializerContext.logger.get();
  }

  public setup(core: CoreSetup, plugins: ExploreServerSetupDeps): ExplorePluginSetup {
    this.logger.debug('explore: Setup');

    core.capabilities.registerProvider(capabilitiesProvider);
    core.capabilities.registerSwitcher(async (request, capabilites) => {
      return await core.security.readonlyService().hideForReadonly(request, capabilites, {
        discover: {
          createShortUrl: false,
          save: false,
          saveQuery: false,
        },
      });
    });
    // core.uiSettings.register(uiSettings);
    core.uiSettings.register(traceUiSettings);
    core.savedObjects.registerType(exploreSavedObjectType);

    // Register fix_query_error AI Delight if available
    if (plugins.aiDelight) {
      plugins.aiDelight.registry.register({
        id: 'fix-query-error',
        delight: fixQueryError,
      });
    }

    return {};
  }

  public start(core: CoreStart) {
    return {};
  }
  public stop() {}
}
