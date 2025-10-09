/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// src/plugins/ai_delight/public/types.ts
import { AIDelightClient } from './client/ai_delight_client';

export interface AiDelightPublicSetup {
  client: AIDelightClient;
}

export interface AiDelightPublicStart {
  client: AIDelightClient;
}
