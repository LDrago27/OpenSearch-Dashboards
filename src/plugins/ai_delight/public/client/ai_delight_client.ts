/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// src/plugins/ai_delight/public/client/ai_delight_client.ts
import { HttpSetup } from '../../../../core/public';
import { AIDelightInfo, ExecutionRequest, ExecutionResponse } from '../../common/types';

export class AIDelightClient {
  private http: HttpSetup;

  constructor(http: HttpSetup) {
    this.http = http;
  }

  /**
   * Get list of available AI delights
   */
  async listDelights(): Promise<AIDelightInfo[]> {
    return await this.http.get('/api/ai/delights/list');
  }

  /**
   * Execute an AI delight with context
   */
  async execute(request: ExecutionRequest): Promise<ExecutionResponse> {
    return await this.http.post('/api/ai/delights/execute', {
      body: JSON.stringify(request),
    });
  }

  /**
   * Check if AI delights service is available
   */
  async healthCheck(): Promise<boolean> {
    try {
      await this.http.get('/api/ai/delights/health');
      return true;
    } catch {
      return false;
    }
  }
}
