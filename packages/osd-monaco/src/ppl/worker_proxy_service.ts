/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { monaco } from '../monaco';
import { ID } from './constants';

export interface PPLValidationResult {
  isValid: boolean;
  errors: string[];
}

export interface PPLTokenizationResult {
  tokens: PPLToken[];
}

export interface PPLCompletionResult {
  completions: any[];
}

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
  tokens?: PPLToken[];
  validation?: PPLValidationResult;
  completions?: any[];
}

export interface PPLToken {
  type: string;
  value: string;
  startIndex: number;
  stopIndex: number;
  line: number;
  column: number;
}

/**
 * PPL Worker Proxy Service
 * Manages communication with PPL web worker for language features
 */
export class PPLWorkerProxyService {
  private worker: Worker | null = null;
  private messageIdCounter = 0;
  private pendingRequests = new Map<string, {
    resolve: (value: any) => void;
    reject: (error: any) => void;
  }>();

  /**
   * Set up the worker and initialize communication
   */
  public async setup(): Promise<void> {
    if (this.worker) {
      return; // Already set up
    }

    try {
      // Get worker from Monaco's environment
      if (typeof window !== 'undefined' && window.MonacoEnvironment?.getWorker) {
        this.worker = await window.MonacoEnvironment.getWorker('', ID);
        
        // Set up message handling
        this.worker.onmessage = (event) => {
          this.handleWorkerMessage(event.data);
        };

        this.worker.onerror = (error) => {
          console.error('PPL worker error:', error);
        };

        console.log('PPL worker proxy service initialized');
      } else {
        throw new Error('Monaco environment not available');
      }
    } catch (error) {
      console.error('Failed to setup PPL worker:', error);
      throw error;
    }
  }

  /**
   * Send a request to the worker and return a promise for the response
   */
  private async sendRequest<T>(request: PPLWorkerRequest): Promise<T> {
    if (!this.worker) {
      throw new Error('Worker not initialized. Call setup() first.');
    }

    const messageId = `msg_${++this.messageIdCounter}`;
    request.messageId = messageId;

    return new Promise((resolve, reject) => {
      this.pendingRequests.set(messageId, { resolve, reject });

      // Set up timeout
      setTimeout(() => {
        if (this.pendingRequests.has(messageId)) {
          this.pendingRequests.delete(messageId);
          reject(new Error('Worker request timeout'));
        }
      }, 10000); // 10 second timeout

      this.worker!.postMessage(request);
    });
  }

  /**
   * Handle messages from the worker
   */
  private handleWorkerMessage(response: PPLWorkerResponse): void {
    const { messageId, success, error } = response;

    if (!messageId || !this.pendingRequests.has(messageId)) {
      console.warn('Received response for unknown message ID:', messageId);
      return;
    }

    const { resolve, reject } = this.pendingRequests.get(messageId)!;
    this.pendingRequests.delete(messageId);

    if (success) {
      resolve(response);
    } else {
      reject(new Error(error || 'Unknown worker error'));
    }
  }

  /**
   * Get completions for PPL code at a specific position
   */
  public async getCompletions(code: string, position: number): Promise<any[]> {
    try {
      const response = await this.sendRequest<PPLWorkerResponse>({
        action: 'getCompletions',
        code,
        position,
      });

      return response.completions || [];
    } catch (error) {
      console.error('Failed to get PPL completions:', error);
      return [];
    }
  }

  /**
   * Validate PPL code and return markers for Monaco editor
   */
  public async getAnnotations(uri: any): Promise<any[]> {
    try {
      // Get model content from Monaco
      const model = monaco.editor.getModel(uri);
      if (!model) {
        return [];
      }

      const code = model.getValue();
      const response = await this.sendRequest<PPLWorkerResponse>({
        action: 'validate',
        code,
      });

      if (!response.validation) {
        return [];
      }

      // Convert validation errors to Monaco markers
      const markers = response.validation.errors.map((error, index) => {
        // Parse error message to extract line/column info
        const match = error.match(/Line (\d+):(\d+) - (.+)/);
        if (match) {
          const line = parseInt(match[1], 10);
          const column = parseInt(match[2], 10);
          const message = match[3];

          return {
            severity: 8, // Error severity
            message,
            startLineNumber: line,
            startColumn: column,
            endLineNumber: line,
            endColumn: column + 1,
          };
        }

        // Fallback for unparseable errors
        return {
          severity: 8,
          message: error,
          startLineNumber: 1,
          startColumn: 1,
          endLineNumber: 1,
          endColumn: 2,
        };
      });

      return markers;
    } catch (error) {
      console.error('Failed to get PPL annotations:', error);
      return [];
    }
  }

  /**
   * Tokenize PPL code
   */
  public async tokenize(code: string): Promise<PPLToken[]> {
    try {
      const response = await this.sendRequest<PPLWorkerResponse>({
        action: 'tokenize',
        code,
      });

      return response.tokens || [];
    } catch (error) {
      console.error('Failed to tokenize PPL code:', error);
      return [];
    }
  }

  /**
   * Stop the worker and clean up resources
   */
  public stop(): void {
    if (this.worker) {
      this.worker.terminate();
      this.worker = null;
    }

    // Reject all pending requests
    this.pendingRequests.forEach(({ reject }) => {
      reject(new Error('Worker terminated'));
    });
    this.pendingRequests.clear();

    console.log('PPL worker proxy service stopped');
  }
}

// Singleton instance
let workerProxyService: PPLWorkerProxyService | null = null;

/**
 * Get the singleton PPL worker proxy service instance
 */
export const getPPLWorkerProxyService = (): PPLWorkerProxyService => {
  if (!workerProxyService) {
    workerProxyService = new PPLWorkerProxyService();
  }
  return workerProxyService;
};