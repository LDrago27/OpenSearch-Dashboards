/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// src/plugins/ai_delight/server/registry/ai_delight_registry.ts
import { Logger } from '@osd/logging';
import {
  AIDelight,
  AIDelightRegistration,
  ExecutionRequest,
  ExecutionResponse,
  AIDelightInfo,
  OsdAgentsRequest,
  OsdAgentsResponse,
} from '../../common/types';

export class AiDelightRegistry {
  private delights = new Map<string, AIDelightRegistration>();
  private logger: Logger;
  private osdAgentsUrl: string;

  constructor(logger: Logger, osdAgentsUrl?: string) {
    this.logger = logger;
    this.osdAgentsUrl = osdAgentsUrl || 'http://localhost:3000';
  }

  /**
   * Register an AI delight (called by other plugins during server startup)
   */
  register(registration: AIDelightRegistration): void {
    if (this.delights.has(registration.id)) {
      throw new Error(`AI Delight with id '${registration.id}' is already registered`);
    }

    // Validate delight
    this.validateDelight(registration);

    this.delights.set(registration.id, registration);
    this.logger.info(`Registered AI Delight: ${registration.id}`);
  }

  /**
   * Get all registered delights (for client listing)
   */
  getAvailableDelights(): AIDelightInfo[] {
    return Array.from(this.delights.entries()).map(([id, registration]) => ({
      id,
      title: registration.delight.title,
      description: registration.delight.description,
      contextSchema: registration.delight.contextSchema,
      available: true, // Always available since we use osd-agents
    }));
  }

  /**
   * Execute an AI delight (called via HTTP API)
   */
  async execute(request: ExecutionRequest): Promise<ExecutionResponse> {
    const startTime = Date.now();

    try {
      const registration = this.delights.get(request.delightId);
      if (!registration) {
        throw new Error(`AI Delight '${request.delightId}' not found`);
      }

      const { delight } = registration;

      // Server-side validation
      if (delight.validation && !delight.validation(request.context)) {
        throw new Error(`Context validation failed for delight '${request.delightId}'`);
      }

      // Build prompt from context
      const userPrompt = this.buildPrompt(delight, request.context);

      // Prepare osd-agents request
      const osdAgentsRequest: OsdAgentsRequest = {
        threadId: `ai-delight-${request.delightId}-${Date.now()}`,
        runId: `run-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`,
        messages: [
          {
            id: `msg-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`,
            role: 'user',
            content: userPrompt,
          },
        ],
        systemPrompt: delight.systemPrompt,
        config: {
          modelId: registration.modelConfig?.modelId || 'anthropic.claude-3-sonnet-20240229-v1:0',
          maxTokens: registration.modelConfig?.maxTokens || 1000,
          temperature: registration.modelConfig?.temperature || 0.1,
        },
      };

      // Call osd-agents runAgents endpoint
      const osdAgentsResponse = await this.callOsdAgents(osdAgentsRequest);

      // Server-side post-processing
      const processedResult = delight.postProcess
        ? delight.postProcess(
            osdAgentsResponse.result || osdAgentsResponse.message || osdAgentsResponse.response
          )
        : this.defaultPostProcess(
            osdAgentsResponse.result ||
              osdAgentsResponse.message ||
              osdAgentsResponse.response ||
              '',
            delight
          );

      const endTime = Date.now();

      return {
        success: true,
        result: processedResult,
        metadata: {
          delightId: request.delightId,
          executionTime: endTime - startTime,
          model: registration.modelConfig?.modelId,
          usage: osdAgentsResponse.usage,
          timestamp: endTime,
        },
      };
    } catch (error) {
      const endTime = Date.now();
      this.logger.error('AI Delight execution failed', {
        delightId: request.delightId,
        error: error.message,
        executionTime: endTime - startTime,
      });

      return {
        success: false,
        error: error.message,
        metadata: {
          delightId: request.delightId,
          executionTime: endTime - startTime,
          timestamp: endTime,
        },
      };
    }
  }

  private async callOsdAgents(request: OsdAgentsRequest): Promise<OsdAgentsResponse> {
    try {
      const response = await fetch(`${this.osdAgentsUrl}/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        throw new Error(`osd-agents request failed: ${response.status} ${response.statusText}`);
      }

      // Handle streaming response (text/event-stream)
      if (response.headers.get('content-type')?.includes('text/event-stream')) {
        return await this.handleStreamingResponse(response);
      }

      // Fallback to JSON response
      return await response.json();
    } catch (error) {
      this.logger.error('Failed to call osd-agents', { error: error.message });
      throw new Error(`osd-agents unavailable: ${error.message}`);
    }
  }

  private async handleStreamingResponse(response: Response): Promise<OsdAgentsResponse> {
    const reader = response.body?.getReader();
    if (!reader) {
      throw new Error('No readable stream available');
    }

    const decoder = new TextDecoder();
    let fullContent = '';
    let done = false;

    try {
      while (!done) {
        const { done: streamDone, value } = await reader.read();
        done = streamDone;

        if (value) {
          const chunk = decoder.decode(value, { stream: true });
          fullContent += chunk;
        }
      }

      // Parse the osd-agents Server-Sent Events (SSE) streaming response
      let resultContent = '';

      // Split response into lines and process each SSE event
      const lines = fullContent.split('\n');
      let accumulatedDelta = '';

      // Process each line looking for SSE data events
      for (const line of lines) {
        const trimmedLine = line.trim();

        // Look for SSE data lines
        if (trimmedLine.startsWith('data: ')) {
          const dataContent = trimmedLine.substring(6); // Remove 'data: ' prefix

          try {
            const event = JSON.parse(dataContent);

            // Accumulate content from TEXT_MESSAGE_CONTENT events
            if (event.type === 'TEXT_MESSAGE_CONTENT' && event.delta) {
              accumulatedDelta += event.delta;
            }
          } catch {
            // Skip malformed JSON in data lines
            continue;
          }
        }
      }

      // Use the accumulated delta content as the result
      if (accumulatedDelta.trim()) {
        resultContent = accumulatedDelta.trim();
      } else {
        // Fallback: if no delta content found, use the entire response
        resultContent = fullContent.trim();
      }

      return {
        result: resultContent,
        message: resultContent,
        response: resultContent,
        usage: undefined, // Streaming responses may not include usage info
      };
    } finally {
      reader.releaseLock();
    }
  }

  private validateDelight(registration: AIDelightRegistration): void {
    const { delight } = registration;

    if (!registration.id || !delight.title) {
      throw new Error('AI Delight must have id and title');
    }

    if (!delight.systemPrompt) {
      throw new Error('AI Delight must have systemPrompt');
    }
  }

  private buildPrompt(delight: AIDelight, context: Record<string, any>): string {
    let prompt = `Context: ${JSON.stringify(context)}

Please analyze the provided context and respond with the requested information.`;

    // Add output format instruction
    if (delight.outputTemplate) {
      prompt += `\n\nPlease respond with ONLY valid JSON in this exact format: ${JSON.stringify(
        delight.outputTemplate
      )}

Do not include any additional text, explanations, or formatting outside the JSON response.`;
    }

    return prompt;
  }

  private defaultPostProcess(response: string, delight: AIDelight): any {
    if (!delight.outputTemplate) {
      return response;
    }

    try {
      return JSON.parse(response);
    } catch (error) {
      // Fallback: try to extract JSON from response
      const jsonMatch = response.match(/\{.*\}/s);
      if (jsonMatch) {
        try {
          return JSON.parse(jsonMatch[0]);
        } catch {
          return { content: response };
        }
      }
      return { content: response };
    }
  }
}
