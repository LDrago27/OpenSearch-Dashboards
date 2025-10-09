/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// src/plugins/ai_delight/common/types.ts - Shared between client and server
export interface AIDelight {
  title: string;
  description?: string;
  systemPrompt: string;
  contextSchema: Record<string, string>;
  outputTemplate?: Record<string, string>;
  validation?: (context: any) => boolean;
  postProcess?: (output: any) => any;
}

export interface AIDelightRegistration {
  id: string;
  delight: AIDelight;
  modelConfig?: {
    modelId?: string;
    maxTokens?: number;
    temperature?: number;
  };
}

export interface ExecutionRequest {
  delightId: string;
  context: Record<string, any>;
}

export interface ExecutionResponse {
  success: boolean;
  result?: any;
  error?: string;
  metadata: {
    delightId: string;
    executionTime: number;
    model?: string;
    usage?: {
      input_tokens: number;
      output_tokens: number;
    };
    timestamp: number;
  };
}

export interface AIDelightInfo {
  id: string;
  title: string;
  description?: string;
  contextSchema: Record<string, string>;
  available: boolean;
}

export interface OsdAgentsRequest {
  threadId: string;
  runId: string;
  messages: Array<{
    id: string;
    role: string;
    content: string;
  }>;
  systemPrompt?: string;
  config?: {
    modelId?: string;
    maxTokens?: number;
    temperature?: number;
  };
}

export interface OsdAgentsResponse {
  result?: string;
  message?: string;
  response?: string;
  usage?: {
    input_tokens: number;
    output_tokens: number;
  };
}
