/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createPPLTokenizer } from './ppl_tokenizer';

export interface ParseResult {
  annotations: Array<{
    at: number;
    text: string;
    type: 'error' | 'warning';
  }>;
}

export type Parser = (text: string) => ParseResult;

export const createParser = (): Parser => {
  const tokenizer = createPPLTokenizer();

  return (text: string): ParseResult => {
    console.log('PPL Grammar: Validating text:', text);
    try {
      const result = tokenizer.validate(text);
      console.log('PPL Grammar: Validation result:', result);

      if (!result.isValid && result.errors && result.errors.length > 0) {
        const annotations = result.errors.map((error: string) => ({
          at: 0, // Default to start of text, could be enhanced with line/column info
          text: error,
          type: 'error' as const,
        }));

        console.log('PPL Grammar: Returning error annotations:', annotations);
        return { annotations };
      }

      console.log('PPL Grammar: Text is valid, no errors');
      return { annotations: [] };
    } catch (error) {
      console.error('PPL Grammar: Validation failed with exception:', error);
      // If validation fails completely, return a general error
      return {
        annotations: [
          {
            at: 0,
            text: 'PPL parsing failed',
            type: 'error' as const,
          },
        ],
      };
    }
  };
};
