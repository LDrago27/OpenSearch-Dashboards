/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// src/plugins/ai_delight/server/types.ts
import { AiDelightRegistry } from './registry/ai_delight_registry';

export interface AiDelightServerSetup {
  registry: AiDelightRegistry;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AiDelightServerStart {
  // Empty for now
}
