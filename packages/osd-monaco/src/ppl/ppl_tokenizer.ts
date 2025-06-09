/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  CharStream,
  CommonTokenStream,
  ParseTreeWalker,
} from 'antlr4ng';

import { OpenSearchPPLLexer } from './.generated/OpenSearchPPLLexer';
import { OpenSearchPPLParser } from './.generated/OpenSearchPPLParser';

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
 * PPL Tokenizer using ANTLR4 generated parser
 */
export class PPLTokenizer {
  private lexer: OpenSearchPPLLexer;
  private parser: OpenSearchPPLParser;

  constructor() {
    // Initialize with empty input - will be updated when tokenizing
    const input = CharStream.fromString('');
    this.lexer = new OpenSearchPPLLexer(input);
    this.parser = new OpenSearchPPLParser(new CommonTokenStream(this.lexer));
  }

  /**
   * Tokenize PPL code and return tokens
   */
  public tokenize(code: string): PPLToken[] {
    try {
      const input = CharStream.fromString(code);
      this.lexer.inputStream = input;
      this.lexer.reset();

      const tokens: PPLToken[] = [];
      let token = this.lexer.nextToken();

      while (token.type !== -1) { // EOF token
        tokens.push({
          type: this.getTokenTypeName(token.type),
          value: token.text || '',
          startIndex: token.start,
          stopIndex: token.stop,
          line: token.line,
          column: token.column,
        });
        token = this.lexer.nextToken();
      }

      return tokens;
    } catch (error) {
      console.error('PPL tokenization error:', error);
      return [];
    }
  }

  /**
   * Validate PPL code and return validation result
   */
  public validate(code: string): PPLValidationResult {
    try {
      const input = CharStream.fromString(code);
      this.lexer.inputStream = input;
      this.lexer.reset();
      
      const tokenStream = new CommonTokenStream(this.lexer);
      this.parser.tokenStream = tokenStream;
      this.parser.reset();

      // Collect errors
      const errors: string[] = [];
      
      this.parser.removeErrorListeners();
      this.parser.addErrorListener({
        syntaxError: (recognizer, offendingSymbol, line, column, message) => {
          errors.push(`Line ${line}:${column} - ${message}`);
        },
      });

      // Parse the input
      this.parser.root();

      return {
        isValid: errors.length === 0,
        errors,
      };
    } catch (error) {
      return {
        isValid: false,
        errors: [error instanceof Error ? error.message : String(error)],
      };
    }
  }

  /**
   * Get completion suggestions for PPL code at a specific position
   */
  public getCompletions(code: string, position: number): PPLCompletionItem[] {
    try {
      // Basic completion items for PPL commands and functions
      const completions: PPLCompletionItem[] = [
        // Commands
        { label: 'SEARCH', kind: 14, detail: 'PPL Command', documentation: 'Search command to filter data' },
        { label: 'DESCRIBE', kind: 14, detail: 'PPL Command', documentation: 'Describe table structure' },
        { label: 'SHOW', kind: 14, detail: 'PPL Command', documentation: 'Show tables or databases' },
        { label: 'FROM', kind: 14, detail: 'PPL Command', documentation: 'Specify data source' },
        { label: 'WHERE', kind: 14, detail: 'PPL Command', documentation: 'Filter data with conditions' },
        { label: 'FIELDS', kind: 14, detail: 'PPL Command', documentation: 'Select specific fields' },
        { label: 'RENAME', kind: 14, detail: 'PPL Command', documentation: 'Rename fields' },
        { label: 'STATS', kind: 14, detail: 'PPL Command', documentation: 'Calculate statistics' },
        { label: 'DEDUP', kind: 14, detail: 'PPL Command', documentation: 'Remove duplicate records' },
        { label: 'SORT', kind: 14, detail: 'PPL Command', documentation: 'Sort records' },
        { label: 'EVAL', kind: 14, detail: 'PPL Command', documentation: 'Evaluate expressions' },
        { label: 'HEAD', kind: 14, detail: 'PPL Command', documentation: 'Get first N records' },
        { label: 'TOP', kind: 14, detail: 'PPL Command', documentation: 'Get top N records' },
        { label: 'RARE', kind: 14, detail: 'PPL Command', documentation: 'Get rare values' },

        // Functions
        { label: 'abs', kind: 3, detail: 'Function', documentation: 'Absolute value function' },
        { label: 'ceil', kind: 3, detail: 'Function', documentation: 'Ceiling function' },
        { label: 'floor', kind: 3, detail: 'Function', documentation: 'Floor function' },
        { label: 'round', kind: 3, detail: 'Function', documentation: 'Round function' },
        { label: 'sqrt', kind: 3, detail: 'Function', documentation: 'Square root function' },
        { label: 'avg', kind: 3, detail: 'Function', documentation: 'Average function' },
        { label: 'count', kind: 3, detail: 'Function', documentation: 'Count function' },
        { label: 'sum', kind: 3, detail: 'Function', documentation: 'Sum function' },
        { label: 'min', kind: 3, detail: 'Function', documentation: 'Minimum function' },
        { label: 'max', kind: 3, detail: 'Function', documentation: 'Maximum function' },
        { label: 'first', kind: 3, detail: 'Function', documentation: 'First value function' },
        { label: 'last', kind: 3, detail: 'Function', documentation: 'Last value function' },

        // Operators
        { label: 'AND', kind: 24, detail: 'Operator', documentation: 'Logical AND operator' },
        { label: 'OR', kind: 24, detail: 'Operator', documentation: 'Logical OR operator' },
        { label: 'NOT', kind: 24, detail: 'Operator', documentation: 'Logical NOT operator' },
        { label: 'IN', kind: 24, detail: 'Operator', documentation: 'IN operator' },
        { label: 'LIKE', kind: 24, detail: 'Operator', documentation: 'LIKE operator for pattern matching' },
        { label: 'BETWEEN', kind: 24, detail: 'Operator', documentation: 'BETWEEN operator for range conditions' },

        // Keywords
        { label: 'AS', kind: 14, detail: 'Keyword', documentation: 'Alias keyword' },
        { label: 'BY', kind: 14, detail: 'Keyword', documentation: 'Group by keyword' },
        { label: 'ASC', kind: 14, detail: 'Keyword', documentation: 'Ascending sort order' },
        { label: 'DESC', kind: 14, detail: 'Keyword', documentation: 'Descending sort order' },
      ];

      // Filter completions based on current context
      const textBeforePosition = code.substring(0, position);
      const lastWord = this.getLastWord(textBeforePosition);
      
      if (lastWord) {
        const filtered = completions.filter(item => 
          item.label.toLowerCase().startsWith(lastWord.toLowerCase())
        );
        return filtered.length > 0 ? filtered : completions;
      }

      return completions;
    } catch (error) {
      console.error('PPL completion error:', error);
      return [];
    }
  }

  /**
   * Get token type name from token type number
   */
  private getTokenTypeName(tokenType: number): string {
    // Map token types to readable names
    const tokenTypeNames: { [key: number]: string } = {
      1: 'SEARCH',
      2: 'DESCRIBE', 
      3: 'SHOW',
      4: 'FROM',
      5: 'WHERE',
      6: 'FIELDS',
      7: 'RENAME',
      8: 'STATS',
      9: 'DEDUP',
      10: 'SORT',
      11: 'EVAL',
      12: 'HEAD',
      13: 'TOP',
      14: 'RARE',
      15: 'PARSE',
      16: 'AS',
      17: 'BY',
      // Add more mappings as needed
    };

    return tokenTypeNames[tokenType] || `TOKEN_${tokenType}`;
  }

  /**
   * Get the last word from text
   */
  private getLastWord(text: string): string {
    const words = text.trim().split(/\s+/);
    return words[words.length - 1] || '';
  }
}

