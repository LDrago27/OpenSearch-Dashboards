/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// Type overrides for antlr4ng to fix compilation issues
declare module 'antlr4ng' {
  export * from 'antlr4ng/dist/index';
}

// Override problematic CommonToken type
declare module 'antlr4ng/dist/CommonToken' {
  export class CommonToken {
    text: string | undefined;
    type: number;
    line: number;
    column: number;
    start: number;
    stop: number;
  }
}