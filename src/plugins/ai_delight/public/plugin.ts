/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// src/plugins/ai_delight/public/plugin.ts
import { CoreSetup, CoreStart, Plugin } from 'src/core/public';
import { AIDelightClient } from './client/ai_delight_client';
import { AiDelightPublicSetup, AiDelightPublicStart } from './types';

export class AiDelightPublicPlugin implements Plugin<AiDelightPublicSetup, AiDelightPublicStart> {
  private client?: AIDelightClient;

  public setup(core: CoreSetup): AiDelightPublicSetup {
    // Initialize the client
    this.client = new AIDelightClient(core.http);

    return {
      client: this.client,
    };
  }

  public start(core: CoreStart): AiDelightPublicStart {
    if (!this.client) {
      throw new Error('AIDelightClient not initialized');
    }

    return {
      client: this.client,
    };
  }

  public stop() {}
}
