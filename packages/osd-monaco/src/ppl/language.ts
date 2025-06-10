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
 * Set up ANTLR-based tokenizer for PPL syntax highlighting
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
      const tokens = tokenizer.tokenize(line);
      const monacoTokens: monaco.languages.IToken[] = [];

      for (const token of tokens) {
        // Map ANTLR token types to Monaco token classes
        let tokenClass = 'identifier';

        switch (token.type.toLowerCase()) {
          case 'search':
          case 'describe':
          case 'show':
          case 'from':
          case 'where':
          case 'fields':
          case 'rename':
          case 'stats':
          case 'dedup':
          case 'sort':
          case 'eval':
          case 'head':
          case 'top':
          case 'rare':
          case 'parse':
          case 'as':
          case 'by':
            tokenClass = 'keyword';
            break;
          case 'abs':
          case 'ceil':
          case 'floor':
          case 'round':
          case 'sqrt':
          case 'log':
          case 'exp':
          case 'sin':
          case 'cos':
          case 'tan':
          case 'avg':
          case 'count':
          case 'sum':
          case 'min':
          case 'max':
          case 'first':
          case 'last':
            tokenClass = 'function';
            break;
          case 'string':
            tokenClass = 'string';
            break;
          case 'number':
            tokenClass = 'number';
            break;
          case 'comment':
            tokenClass = 'comment';
            break;
          case 'operator':
            tokenClass = 'operator';
            break;
          case 'delimiter':
            tokenClass = 'delimiter';
            break;
          default:
            tokenClass = 'identifier';
        }

        monacoTokens.push({
          startIndex: token.startIndex,
          scopes: tokenClass,
        });
      }

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
    const parseResult = await wps.getAnnos(model.uri);
    if (!parseResult) {
      return;
    }
    const { annotations } = parseResult;
    monaco.editor.setModelMarkers(
      model,
      OWNER,
      annotations.map(({ at, text, type }) => {
        const { column, lineNumber } = model.getPositionAt(at);
        return {
          startLineNumber: lineNumber,
          startColumn: column,
          endLineNumber: lineNumber,
          endColumn: column,
          message: text,
          severity: type === 'error' ? monaco.MarkerSeverity.Error : monaco.MarkerSeverity.Warning,
        };
      })
    );
  };

  const onModelAdd = (model: monaco.editor.IModel) => {
    if (model.getLanguageId() === ID) {
      allDisposables.push(
        model.onDidChangeContent(async () => {
          updateAnnotations(model);
        })
      );

      updateAnnotations(model);
    }
  };
  allDisposables.push(monaco.editor.onDidCreateModel(onModelAdd));
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
} catch (e) {
  // Worker file not available at build time - will be loaded at runtime
}

registerGrammarChecker();
