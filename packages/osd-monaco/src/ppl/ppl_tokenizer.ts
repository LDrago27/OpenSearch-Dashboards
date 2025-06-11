/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as antlr from 'antlr4ng';
import { OpenSearchPPLLexer } from './.generated/OpenSearchPPLLexer';
import { OpenSearchPPLParser } from './.generated/OpenSearchPPLParser';
import { PPLSyntaxErrorListener } from './ppl_error_listener';

export interface PPLToken {
  type: string;
  value: string;
  startIndex: number;
  stopIndex: number;
  line: number;
  column: number;
}

export interface PPLValidationResult {
  isValid: boolean;
  errors: string[];
}

export interface PPLCompletionItem {
  label: string;
  kind: number;
  detail?: string;
  documentation?: string;
  insertText?: string;
}

/**
 * PPL Tokenizer implementation using ANTLR generated parser
 */
export class PPLTokenizer {
  constructor() {
    // ANTLR-based tokenizer initialization
  }

  /**
   * Tokenize PPL code into tokens using ANTLR lexer
   */
  tokenize(code: string): PPLToken[] {
    console.log('PPL Tokenizer: tokenize() called with code:', code);
    const tokens: PPLToken[] = [];

    try {
      const inputStream = antlr.CharStream.fromString(code);
      const lexer = new OpenSearchPPLLexer(inputStream);
      const tokenStream = new antlr.CommonTokenStream(lexer);
      tokenStream.fill();

      const antlrTokens = tokenStream.getTokens();
      console.log('PPL Tokenizer: ANTLR produced', antlrTokens.length, 'tokens');

      for (const token of antlrTokens) {
        if (token.type !== antlr.Token.EOF) {
          const tokenTypeName = this.getTokenTypeName(token.type, lexer);
          console.log('PPL Tokenizer: Token -', tokenTypeName, token.text);
          tokens.push({
            type: tokenTypeName,
            value: token.text || '',
            startIndex: token.start,
            stopIndex: token.stop,
            line: token.line,
            column: token.column,
          });
        }
      }
    } catch (error) {
      console.error('PPL Tokenizer: Error during tokenization:', error);
    }

    console.log('PPL Tokenizer: Returning', tokens.length, 'tokens');
    return tokens;
  }

  /**
   * Validate PPL code using ANTLR parser
   */
  validate(code: string): PPLValidationResult {
    console.log('PPL Tokenizer: validate() called with code:', code);

    try {
      const inputStream = antlr.CharStream.fromString(code);
      const lexer = new OpenSearchPPLLexer(inputStream);

      // Use the dedicated PPL error listener for lexer
      const lexerErrorListener = new PPLSyntaxErrorListener();
      lexer.removeErrorListeners();
      lexer.addErrorListener(lexerErrorListener);

      const tokenStream = new antlr.CommonTokenStream(lexer);
      const parser = new OpenSearchPPLParser(tokenStream);

      // Use the dedicated PPL error listener for parser
      const parserErrorListener = new PPLSyntaxErrorListener();
      parser.removeErrorListeners();
      parser.addErrorListener(parserErrorListener);

      console.log('PPL Tokenizer: Attempting to parse...');
      parser.root();

      // Collect all errors from both lexer and parser
      const allErrors = [...lexerErrorListener.errors, ...parserErrorListener.errors];

      if (allErrors.length > 0) {
        console.log('PPL Tokenizer: Parsing failed with', allErrors.length, 'errors');

        // Convert syntax errors to string messages
        const errorMessages = allErrors.map(
          (error) => `Parse error at line ${error.line}, column ${error.column}: ${error.message}`
        );

        console.log('PPL Tokenizer: Error details:', errorMessages);
        return {
          isValid: false,
          errors: errorMessages,
        };
      }

      // Check if the parser consumed all tokens
      const currentToken = parser.getCurrentToken();
      if (currentToken && currentToken.type !== antlr.Token.EOF) {
        console.log(
          'PPL Tokenizer: Parser did not consume all input, current token:',
          currentToken.text
        );
        return {
          isValid: false,
          errors: [`Unexpected token: ${currentToken.text}`],
        };
      }

      console.log('PPL Tokenizer: Parsing successful - code is valid');
      return {
        isValid: true,
        errors: [],
      };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.log('PPL Tokenizer: Parsing failed with exception:', errorMessage);
      return {
        isValid: false,
        errors: [`Parsing exception: ${errorMessage}`],
      };
    }
  }

  /**
   * Get completions for PPL code based on ANTLR tokens
   */
  getCompletions(code: string, position: number): PPLCompletionItem[] {
    const completions: PPLCompletionItem[] = [];

    try {
      // Get the word at the current position
      const beforePosition = code.substring(0, position);
      const wordMatch = beforePosition.match(/\w*$/);
      const currentWord = wordMatch ? wordMatch[0] : '';

      // Get PPL keywords from the lexer
      const keywords = this.getPPLKeywords();
      const functions = this.getPPLFunctions();

      // Add keyword completions
      for (const keyword of keywords) {
        if (keyword.toLowerCase().startsWith(currentWord.toLowerCase())) {
          completions.push({
            label: keyword,
            kind: 14, // Keyword kind
            detail: 'PPL Command',
            documentation: `${keyword} command`,
            insertText: keyword,
          });
        }
      }

      // Add function completions
      for (const func of functions) {
        if (func.toLowerCase().startsWith(currentWord.toLowerCase())) {
          completions.push({
            label: func,
            kind: 3, // Function kind
            detail: 'PPL Function',
            documentation: `${func} function`,
            insertText: `${func}()`,
          });
        }
      }
    } catch (error) {
      // Error getting completions
    }

    return completions;
  }

  /**
   * Get token type name from ANTLR token type
   */
  private getTokenTypeName(tokenType: number, lexer: OpenSearchPPLLexer): string {
    const vocabulary = lexer.vocabulary;
    const symbolicName = vocabulary.getSymbolicName(tokenType);

    if (symbolicName) {
      return symbolicName.toLowerCase();
    }

    const literalName = vocabulary.getLiteralName(tokenType);
    if (literalName) {
      return literalName.replace(/['"]/g, '');
    }

    return 'unknown';
  }

  /**
   * Get PPL keywords from the lexer vocabulary
   */
  private getPPLKeywords(): string[] {
    return [
      'SEARCH',
      'DESCRIBE',
      'SHOW',
      'FROM',
      'WHERE',
      'FIELDS',
      'RENAME',
      'STATS',
      'DEDUP',
      'SORT',
      'EVAL',
      'HEAD',
      'TOP',
      'RARE',
      'PARSE',
      'AS',
      'BY',
      'SOURCE',
      'INDEX',
      'DATASOURCES',
      'METHOD',
      'REGEX',
      'PATTERN',
      'KMEANS',
      'AD',
      'ML',
    ];
  }

  /**
   * Get PPL functions
   */
  private getPPLFunctions(): string[] {
    return [
      'abs',
      'ceil',
      'floor',
      'round',
      'sqrt',
      'log',
      'exp',
      'sin',
      'cos',
      'tan',
      'avg',
      'count',
      'sum',
      'min',
      'max',
      'first',
      'last',
      'stddev',
      'var_pop',
      'concat',
      'length',
      'lower',
      'upper',
      'trim',
      'substring',
      'replace',
    ];
  }
}

/**
 * Create a PPL tokenizer instance
 */
export const createPPLTokenizer = (): PPLTokenizer => {
  return new PPLTokenizer();
};

/**
 * Create PPL language configuration for Monaco
 */
export const createPPLLanguageConfiguration = () => ({
  comments: {
    lineComment: '//',
    blockComment: ['/*', '*/'],
  },
  brackets: [
    ['(', ')'],
    ['[', ']'],
    ['{', '}'],
  ],
  autoClosingPairs: [
    { open: '(', close: ')' },
    { open: '[', close: ']' },
    { open: '{', close: '}' },
    { open: '"', close: '"' },
    { open: "'", close: "'" },
    { open: '`', close: '`' },
  ],
  surroundingPairs: [
    { open: '(', close: ')' },
    { open: '[', close: ']' },
    { open: '{', close: '}' },
    { open: '"', close: '"' },
    { open: "'", close: "'" },
    { open: '`', close: '`' },
  ],
});
