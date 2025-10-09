/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AIDelight } from '../../../ai_delight/common';

export const fixQueryError: AIDelight = {
  title: 'fix-query-error',
  systemPrompt:
    'Given a PPL Query, with the error from parser return a valid PPL query that fixes the error',
  contextSchema: {
    query: 'string',
    parserError: 'string',
  },
  outputTemplate: {
    fixedQuery: 'string',
  },
};
