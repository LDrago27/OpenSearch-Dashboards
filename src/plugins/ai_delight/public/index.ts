/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// src/plugins/ai_delight/public/index.ts
import type { PluginInitializerContext } from 'src/core/public';
import { AiDelightPublicPlugin } from './plugin';

export function plugin(initializerContext: PluginInitializerContext) {
  return new AiDelightPublicPlugin();
}

export type { AiDelightPublicSetup, AiDelightPublicStart } from './types';
