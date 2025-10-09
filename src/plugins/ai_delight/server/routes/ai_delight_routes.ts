/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// src/plugins/ai_delight/server/routes/ai_delight_routes.ts
import { schema } from '@osd/config-schema';
import { IRouter } from 'src/core/server';
import { AiDelightRegistry } from '../registry/ai_delight_registry';

export function registerAIDelightRoutes(router: IRouter, registry: AiDelightRegistry) {
  /**
   * List available AI delights
   * GET /api/ai/delights/list
   */
  router.get(
    {
      path: '/api/ai/delights/list',
      validate: false,
    },
    async (context, request, response) => {
      try {
        const delights = registry.getAvailableDelights();
        return response.ok({ body: delights });
      } catch (error) {
        return response.badRequest({
          body: { message: error.message },
        });
      }
    }
  );

  /**
   * Execute an AI delight
   * POST /api/ai/delights/execute
   */
  router.post(
    {
      path: '/api/ai/delights/execute',
      validate: {
        body: schema.object({
          delightId: schema.string(),
          context: schema.recordOf(schema.string(), schema.any()),
        }),
      },
    },
    async (context, request, response) => {
      try {
        const { delightId, context: delightContext } = request.body;
        const result = await registry.execute({ delightId, context: delightContext });
        return response.ok({ body: result });
      } catch (error) {
        return response.badRequest({
          body: { message: error.message },
        });
      }
    }
  );

  /**
   * Health check endpoint
   * GET /api/ai/delights/health
   */
  router.get(
    {
      path: '/api/ai/delights/health',
      validate: false,
    },
    async (context, request, response) => {
      try {
        const status = {
          status: 'healthy',
          timestamp: new Date().toISOString(),
          service: 'ai-delights',
        };
        return response.ok({ body: status });
      } catch (error) {
        return response.custom({
          statusCode: 503,
          body: {
            status: 'unhealthy',
            error: error.message,
          },
        });
      }
    }
  );
}
