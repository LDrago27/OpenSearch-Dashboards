/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AIDelight } from '../../../ai_delight/common';

export const fixQueryError: AIDelight = {
  title: 'fix-query-error',
  systemPrompt:
    'Given a PPL Query, analyze it and provide a fixed version along with explanation. If there are errors, fix them. If no errors, suggest optimizations.',
  contextSchema: {
    query: 'string',
    error: 'string',
  },
  outputTemplate: {
    fixedQuery: 'string',
    explanation: 'string',
    errorType: 'string',
  },
};
