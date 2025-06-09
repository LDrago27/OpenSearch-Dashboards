/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { PPLTokenizer } from '../ppl_tokenizer';

export interface PPLWorkerRequest {
  action: 'tokenize' | 'validate' | 'getCompletions';
  code: string;
  position?: number;
  messageId?: string;
}

export interface PPLWorkerResponse {
  success: boolean;
  error?: string;
  messageId?: string;
  tokens?: any[];
  validation?: {
    isValid: boolean;
    errors: string[];
  };
  completions?: any[];
}

export interface PPLValidationResult {
  isValid: boolean;
  errors: string[];
}

export interface PPLCompletionResult {
  completions: any[];
}

/**
 * PPL Worker Implementation
 * Handles tokenization, validation, and completions for PPL language
 */
export class PPLWorker {
  private tokenizer: PPLTokenizer;

  constructor() {
    this.tokenizer = new PPLTokenizer();
  }

  /**
   * Process incoming messages from the main thread
   */
  public async handleMessage(request: PPLWorkerRequest): Promise<PPLWorkerResponse> {
    try {
      switch (request.action) {
        case 'tokenize':
          return this.handleTokenize(request);
        
        case 'validate':
          return this.handleValidate(request);
        
        case 'getCompletions':
          return this.handleGetCompletions(request);
        
        default:
          throw new Error(`Unknown action: ${(request as any).action}`);
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : String(error),
        messageId: request.messageId,
      };
    }
  }

  /**
   * Handle tokenization requests
   */
  private handleTokenize(request: PPLWorkerRequest): PPLWorkerResponse {
    try {
      const tokens = this.tokenizer.tokenize(request.code);
      return {
        success: true,
        tokens,
        messageId: request.messageId,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : String(error),
        messageId: request.messageId,
      };
    }
  }

  /**
   * Handle validation requests
   */
  private handleValidate(request: PPLWorkerRequest): PPLWorkerResponse {
    try {
      const validation = this.tokenizer.validate(request.code);
      return {
        success: true,
        validation,
        messageId: request.messageId,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : String(error),
        messageId: request.messageId,
      };
    }
  }

  /**
   * Handle completion requests
   */
  private handleGetCompletions(request: PPLWorkerRequest): PPLWorkerResponse {
    try {
      const completions = this.tokenizer.getCompletions(request.code, request.position || 0);
      return {
        success: true,
        completions,
        messageId: request.messageId,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : String(error),
        messageId: request.messageId,
      };
    }
  }
}

// Create worker instance
const worker = new PPLWorker();

// Handle messages from main thread
self.addEventListener('message', async (event) => {
  const request: PPLWorkerRequest = event.data;
  const response = await worker.handleMessage(request);
  
  // Send response back to main thread
  self.postMessage(response);
});