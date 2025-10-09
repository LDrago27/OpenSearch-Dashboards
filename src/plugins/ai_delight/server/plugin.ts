/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// src/plugins/ai_delight/server/plugin.ts
import { PluginInitializerContext, CoreSetup, CoreStart, Plugin, Logger } from 'src/core/server';
import { AiDelightRegistry } from './registry/ai_delight_registry';
import { registerAIDelightRoutes } from './routes/ai_delight_routes';
import { AiDelightServerSetup, AiDelightServerStart } from './types';

export class AiDelightServerPlugin implements Plugin<AiDelightServerSetup, AiDelightServerStart> {
  private readonly logger: Logger;
  private readonly initializerContext: PluginInitializerContext;
  private registry?: AiDelightRegistry;

  constructor(initializerContext: PluginInitializerContext) {
    this.logger = initializerContext.logger.get();
    this.initializerContext = initializerContext;
  }

  public setup(core: CoreSetup): AiDelightServerSetup {
    this.logger.debug('AI Delight plugin: Server setup');

    // Try to get chat plugin's agUiUrl configuration
    let osdAgentsUrl: string | undefined;
    try {
      // For now, we'll check if there's a chat.agUiUrl in environment or use default
      // This is a simplified approach - in practice you might want to access it differently
      osdAgentsUrl = process.env.CHAT_AG_UI_URL;
    } catch (error) {
      this.logger.debug('Could not access chat configuration, using default URL');
    }

    // Initialize the registry with URL (will fallback to localhost:3000 if undefined)
    this.registry = new AiDelightRegistry(this.logger, osdAgentsUrl);

    // Register routes
    const router = core.http.createRouter();
    registerAIDelightRoutes(router, this.registry);

    // Return setup contract
    return {
      registry: this.registry,
    };
  }

  public start(_core: CoreStart): AiDelightServerStart {
    this.logger.debug('AI Delight plugin: Server started');
    return {};
  }

  public stop() {
    this.logger.debug('AI Delight plugin: Server stopped');
  }
}
