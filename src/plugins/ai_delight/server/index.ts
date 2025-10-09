/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// src/plugins/ai_delight/server/index.ts
import type { PluginInitializerContext } from 'src/core/server';
import { AiDelightServerPlugin } from './plugin';

export function plugin(initializerContext: PluginInitializerContext) {
  return new AiDelightServerPlugin(initializerContext);
}

export type { AiDelightServerSetup, AiDelightServerStart } from './types';
