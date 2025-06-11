/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { monaco } from '../monaco';
import { ID } from './constants';
import { WorkerProxyService } from './worker_proxy_service';
import { registerWorker } from '../worker_store';
import { createPPLTokenizer } from './ppl_tokenizer';

const wps = new WorkerProxyService();

const OWNER = 'PPL_GRAMMAR_CHECKER';

/**
 * PPL Language Configuration for Monaco
 */
const createPPLLanguageConfiguration = (): monaco.languages.LanguageConfiguration => ({
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
  folding: {
    markers: {
      start: new RegExp('^\\s*//\\s*#region\\b'),
      end: new RegExp('^\\s*//\\s*#endregion\\b'),
    },
  },
});

/**
 * Get comprehensive token class for PPL syntax highlighting
 * Maps ANTLR tokens to Monaco editor token classes following xjson lexer pattern
 */
const getTokenClass = (tokenType: string): string => {
  const type = tokenType.toUpperCase();

  // Keywords (PPL commands, logical operators, etc.) - following xjson pattern
  if (
    [
      // COMMAND KEYWORDS
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
      'METHOD',
      'REGEX',
      'PUNCT',
      'GROK',
      'PATTERN',
      'PATTERNS',
      'NEW_FIELD',
      'KMEANS',
      'AD',
      'ML',
      // COMMAND ASSIST KEYWORDS
      'AS',
      'BY',
      'SOURCE',
      'INDEX',
      'D',
      'DESC',
      'DATASOURCES',
      // CLAUSE KEYWORDS
      'SORTBY',
      // FIELD KEYWORDS
      'AUTO',
      'STR',
      'IP',
      'NUM',
      // LOGICAL KEYWORDS
      'NOT',
      'OR',
      'AND',
      'XOR',
      'TRUE',
      'FALSE',
      'REGEXP',
      // COMPARISON FUNCTION KEYWORDS
      'CASE',
      'IN',
      // CONVERTED DATA TYPES
      'INT',
      'INTEGER',
      'DOUBLE',
      'LONG',
      'FLOAT',
      'STRING',
      'BOOLEAN',
      // DATASET TYPES
      'DATAMODEL',
      'LOOKUP',
      'SAVEDSEARCH',
      // DATETIME, INTERVAL AND UNIT KEYWORDS
      'CONVERT_TZ',
      'DATETIME',
      'DAY',
      'DAY_HOUR',
      'DAY_MICROSECOND',
      'DAY_MINUTE',
      'DAY_OF_YEAR',
      'DAY_SECOND',
      'HOUR',
      'HOUR_MICROSECOND',
      'HOUR_MINUTE',
      'HOUR_OF_DAY',
      'HOUR_SECOND',
      'INTERVAL',
      'MICROSECOND',
      'MILLISECOND',
      'MINUTE',
      'MINUTE_MICROSECOND',
      'MINUTE_OF_DAY',
      'MINUTE_OF_HOUR',
      'MINUTE_SECOND',
      'MONTH',
      'MONTH_OF_YEAR',
      'QUARTER',
      'SECOND',
      'SECOND_MICROSECOND',
      'SECOND_OF_MINUTE',
      'WEEK',
      'WEEK_OF_YEAR',
      'YEAR',
      'YEAR_MONTH',
      // SPAN KEYWORDS
      'SPAN',
      'MS',
      'S',
      'M',
      'H',
      'W',
      'Q',
      'Y',
    ].includes(type)
  ) {
    return 'keyword';
  }

  // Built-in functions - following xjson pattern (uses 'identifier' not 'support.function')
  if (
    [
      // AGGREGATIONS
      'AVG',
      'COUNT',
      'DISTINCT_COUNT',
      'ESTDC',
      'ESTDC_ERROR',
      'MAX',
      'MEAN',
      'MEDIAN',
      'MIN',
      'MODE',
      'RANGE',
      'STDEV',
      'STDEVP',
      'SUM',
      'SUMSQ',
      'VAR_SAMP',
      'VAR_POP',
      'STDDEV_SAMP',
      'STDDEV_POP',
      'PERCENTILE',
      'TAKE',
      'FIRST',
      'LAST',
      'LIST',
      'VALUES',
      'EARLIEST',
      'EARLIEST_TIME',
      'LATEST',
      'LATEST_TIME',
      'PER_DAY',
      'PER_HOUR',
      'PER_MINUTE',
      'PER_SECOND',
      'RATE',
      'SPARKLINE',
      'C',
      'DC',
      // BASIC FUNCTIONS
      'ABS',
      'CBRT',
      'CEIL',
      'CEILING',
      'CONV',
      'CRC32',
      'E',
      'EXP',
      'FLOOR',
      'LN',
      'LOG',
      'LOG10',
      'LOG2',
      'MOD',
      'PI',
      'POSITION',
      'POW',
      'POWER',
      'RAND',
      'ROUND',
      'SIGN',
      'SQRT',
      'TRUNCATE',
      // TRIGONOMETRIC FUNCTIONS
      'ACOS',
      'ASIN',
      'ATAN',
      'ATAN2',
      'COS',
      'COT',
      'DEGREES',
      'RADIANS',
      'SIN',
      'TAN',
      // DATE AND TIME FUNCTIONS
      'ADDDATE',
      'ADDTIME',
      'CURDATE',
      'CURRENT_DATE',
      'CURRENT_TIME',
      'CURRENT_TIMESTAMP',
      'CURTIME',
      'DATE',
      'DATEDIFF',
      'DATE_ADD',
      'DATE_FORMAT',
      'DATE_SUB',
      'DAYNAME',
      'DAYOFMONTH',
      'DAYOFWEEK',
      'DAYOFYEAR',
      'DAY_OF_MONTH',
      'DAY_OF_WEEK',
      'DAY_OF_YEAR',
      'EXTRACT',
      'FROM_DAYS',
      'FROM_UNIXTIME',
      'GET_FORMAT',
      'LAST_DAY',
      'LOCALTIME',
      'LOCALTIMESTAMP',
      'MAKEDATE',
      'MAKETIME',
      'MONTHNAME',
      'NOW',
      'PERIOD_ADD',
      'PERIOD_DIFF',
      'SEC_TO_TIME',
      'STR_TO_DATE',
      'SUBDATE',
      'SUBTIME',
      'SYSDATE',
      'TIME',
      'TIMEDIFF',
      'TIMESTAMP',
      'TIMESTAMPADD',
      'TIMESTAMPDIFF',
      'TIME_FORMAT',
      'TIME_TO_SEC',
      'TO_DAYS',
      'TO_SECONDS',
      'UNIX_TIMESTAMP',
      'UTC_DATE',
      'UTC_TIME',
      'UTC_TIMESTAMP',
      'WEEKDAY',
      'YEARWEEK',
      // TEXT FUNCTIONS
      'SUBSTR',
      'SUBSTRING',
      'LTRIM',
      'RTRIM',
      'TRIM',
      'TO',
      'LOWER',
      'UPPER',
      'CONCAT',
      'CONCAT_WS',
      'LENGTH',
      'STRCMP',
      'RIGHT',
      'LEFT',
      'ASCII',
      'LOCATE',
      'REPLACE',
      'REVERSE',
      'CAST',
      // BOOL FUNCTIONS
      'LIKE',
      'ISNULL',
      'ISNOTNULL',
      // FLOWCONTROL FUNCTIONS
      'IFNULL',
      'NULLIF',
      'IF',
      'TYPEOF',
      // RELEVANCE FUNCTIONS
      'MATCH',
      'MATCH_PHRASE',
      'MATCH_PHRASE_PREFIX',
      'MATCH_BOOL_PREFIX',
      'SIMPLE_QUERY_STRING',
      'MULTI_MATCH',
      'QUERY_STRING',
    ].includes(type)
  ) {
    return 'identifier';
  }

  // Column/Field identifiers - use 'constant' for field names (like single quotes in xjson)
  // This gives column names a distinct color from keywords and built-in functions
  if (type === 'ID' || type === 'CLUSTER') {
    return 'constant';
  }

  // Literals
  if (type === 'INTEGER_LITERAL' || type === 'DECIMAL_LITERAL') {
    return 'number';
  }

  if (type === 'DQUOTA_STRING' || type === 'SQUOTA_STRING' || type === 'BQUOTA_STRING') {
    return 'string';
  }

  // Operators - following xjson pattern (uses 'keyword.operator')
  if (
    [
      'PIPE',
      'COMMA',
      'DOT',
      'EQUAL',
      'GREATER',
      'LESS',
      'NOT_GREATER',
      'NOT_LESS',
      'NOT_EQUAL',
      'PLUS',
      'MINUS',
      'STAR',
      'DIVIDE',
      'MODULE',
      'EXCLAMATION_SYMBOL',
      'BIT_NOT_OP',
      'BIT_AND_OP',
      'BIT_XOR_OP',
    ].includes(type)
  ) {
    return 'keyword.operator';
  }

  // Parentheses - following xjson pattern
  if (type === 'LT_PRTHS') {
    return 'paren.lparen';
  }
  if (type === 'RT_PRTHS') {
    return 'paren.rparen';
  }

  // Other delimiters
  if (
    ['COLON', 'LT_SQR_PRTHS', 'RT_SQR_PRTHS', 'SINGLE_QUOTE', 'DOUBLE_QUOTE', 'BACKTICK'].includes(
      type
    )
  ) {
    return 'delimiter';
  }

  // Handle generic token types that might come from the tokenizer
  const lowerType = tokenType.toLowerCase();
  if (lowerType === 'string') return 'string';
  if (lowerType === 'number') return 'number';
  if (lowerType === 'comment') return 'comment';
  if (lowerType === 'operator') return 'operator';
  if (lowerType === 'delimiter') return 'delimiter';

  return 'identifier';
};

/**
 * Set up ANTLR-based tokenizer for PPL syntax highlighting and validation
 */
const setupANTLRTokenizer = () => {
  const tokenizer = createPPLTokenizer();

  // Register a token provider that uses ANTLR tokenization
  monaco.languages.setTokensProvider(ID, {
    getInitialState: () => {
      const state = {
        clone: () => state,
        equals: () => true,
      };
      return state;
    },

    tokenize: (line: string, state: any) => {
      console.log('PPL: Tokenizing line:', line);
      const tokens = tokenizer.tokenize(line);
      const monacoTokens: monaco.languages.IToken[] = [];

      console.log(
        'PPL: ANTLR returned tokens:',
        tokens.length,
        tokens.map((t) => ({ type: t.type, value: t.value }))
      );

      // Note: We don't validate individual lines here because PPL validation
      // requires complete queries. Line-by-line validation would give false positives.
      // Full validation happens in the grammar checker for complete documents.

      for (const token of tokens) {
        // Map ANTLR token types to Monaco token classes
        const tokenClass = getTokenClass(token.type);
        console.log('PPL: Token mapping -', token.type, '->', tokenClass);

        monacoTokens.push({
          startIndex: token.startIndex,
          scopes: tokenClass,
        });
      }

      console.log('PPL: Monaco tokens generated:', monacoTokens.length);
      return {
        tokens: monacoTokens,
        endState: state,
      };
    },
  });
};

/**
 * Register PPL language with Monaco editor
 */
export const registerPPLLanguage = () => {
  // Register the language
  monaco.languages.register({
    id: ID,
    extensions: ['.ppl'],
    aliases: ['PPL', 'ppl', 'Piped Processing Language'],
    mimetypes: ['application/ppl', 'text/ppl'],
  });

  // Set language configuration
  monaco.languages.setLanguageConfiguration(ID, createPPLLanguageConfiguration());

  // Set ANTLR-based tokenizer
  setupANTLRTokenizer();

  monaco.languages.onLanguage(ID, async () => {
    return wps.setup();
  });
};

export const registerGrammarChecker = () => {
  const allDisposables: monaco.IDisposable[] = [];

  const updateAnnotations = async (model: monaco.editor.IModel): Promise<void> => {
    if (model.isDisposed()) {
      return;
    }

    console.log('PPL: Updating annotations for model:', model.uri.toString());

    try {
      const tokenizer = createPPLTokenizer();
      const fullText = model.getValue();
      const allAnnotations: Array<{ at: number; text: string; type: 'error' | 'warning' }> = [];
      if (fullText.trim().length > 0) {
        console.log('PPL: Performing direct validation on full text');
        const directValidation = tokenizer.validate(fullText);
        console.log('PPL: Direct validation result:', directValidation);

        if (!directValidation.isValid && directValidation.errors.length > 0) {
          // Add direct validation errors with precise positioning
          directValidation.errors.forEach((error) => {
            // Parse error message to extract line/column information
            const errorMatch = error.match(/Parse error at line (\d+), column (\d+): (.+)/);
            if (errorMatch) {
              const line = parseInt(errorMatch[1], 10);
              const column = parseInt(errorMatch[2], 10);
              const message = errorMatch[3];

              // Calculate position in the document
              const lines = fullText.split('\n');
              let position = 0;
              for (let i = 0; i < line - 1 && i < lines.length; i++) {
                position += lines[i].length + 1; // +1 for newline
              }
              position += column;

              allAnnotations.push({
                at: position,
                text: `Grammar Error: ${message}`,
                type: 'error' as const,
              });
            } else {
              // Fallback to start of document if we can't parse the error
              allAnnotations.push({
                at: 0,
                text: `Grammar Error: ${error}`,
                type: 'error' as const,
              });
            }
          });
        }
      }

      console.log('PPL: Total annotations to display:', allAnnotations.length);

      monaco.editor.setModelMarkers(
        model,
        OWNER,
        allAnnotations.map(({ at, text, type }) => {
          const { column, lineNumber } = model.getPositionAt(at);

          // For precise error positioning, highlight just a few characters from the error position
          const startColumn = column;
          let endColumn = column + 1; // Default to single character

          // Try to highlight the actual token causing the error
          const line = model.getLineContent(lineNumber);
          const restOfLine = line.substring(column - 1);

          // Find the next whitespace or special character to determine token end
          const tokenMatch = restOfLine.match(/^[a-zA-Z_$][a-zA-Z0-9_$]*|^[^a-zA-Z0-9\s]+/);
          if (tokenMatch && tokenMatch[0]) {
            endColumn = column + tokenMatch[0].length;
          } else {
            // If no token found, highlight at least 1 character or until end of line
            endColumn = Math.min(column + 1, model.getLineMaxColumn(lineNumber));
          }

          return {
            startLineNumber: lineNumber,
            startColumn,
            endLineNumber: lineNumber,
            endColumn,
            message: text,
            severity:
              type === 'error' ? monaco.MarkerSeverity.Error : monaco.MarkerSeverity.Warning,
          };
        })
      );
    } catch (error) {
      console.error('PPL: Error getting annotations:', error);
    }
  };

  const onModelAdd = (model: monaco.editor.IModel) => {
    console.log('PPL: Model detected, language:', model.getLanguageId());
    if (model.getLanguageId() === ID) {
      console.log('PPL: Setting up grammar checker for PPL model:', model.uri.toString());
      allDisposables.push(
        model.onDidChangeContent(async () => {
          console.log('PPL: Content changed, updating annotations');
          updateAnnotations(model);
        })
      );

      console.log('PPL: Initial annotation update for new model');
      updateAnnotations(model);
    }
  };

  // Handle newly created models
  allDisposables.push(monaco.editor.onDidCreateModel(onModelAdd));

  // Also handle existing models that might already exist
  console.log('PPL: Checking for existing models...');
  const existingModels = monaco.editor.getModels();
  console.log('PPL: Found', existingModels.length, 'existing models');

  existingModels.forEach((model) => {
    console.log('PPL: Existing model:', model.uri.toString(), 'language:', model.getLanguageId());
    if (model.getLanguageId() === ID) {
      console.log('PPL: Found existing PPL model, setting up grammar checker');
      onModelAdd(model);
    }
  });

  return () => {
    wps.stop();
    allDisposables.forEach((d) => d.dispose());
  };
};

/**
 * Get or create a PPL model in Monaco editor
 */
export const createPPLModel = (content: string, uri?: monaco.Uri): monaco.editor.ITextModel => {
  const modelUri = uri || monaco.Uri.parse(`ppl://model${Date.now()}.ppl`);

  // Check if model already exists
  const existingModel = monaco.editor.getModel(modelUri);
  if (existingModel) {
    existingModel.setValue(content);
    return existingModel;
  }

  // Create new model
  return monaco.editor.createModel(content, ID, modelUri);
};

// Register language against shared monaco instance.
registerPPLLanguage();

// register ppl worker to the worker map.
try {
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const workerSrc = require('!!raw-loader!../../target/public/ppl.editor.worker.js');
  registerWorker(ID, workerSrc);
  console.log('PPL: Worker registered successfully, size:', workerSrc.length);
} catch (e) {
  console.warn('PPL: Worker file not available at build time - will be loaded at runtime', e);
}

registerGrammarChecker();
