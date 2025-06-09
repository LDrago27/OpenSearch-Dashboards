/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { monaco } from '../monaco';
import { ID } from './constants';
import { getPPLWorkerProxyService } from './worker_proxy_service';
import { registerWorker } from '../worker_store';
// @ts-ignore
import pplWorkerSrc from '!!raw-loader!../../target/public/ppl.editor.worker.js';

// Register PPL worker in the worker store
registerWorker(ID, pplWorkerSrc);

const OWNER = 'PPL_LANGUAGE_SERVICE';

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
 * PPL Monarch Language Definition
 */
const createPPLMonarchLanguage = (): monaco.languages.IMonarchLanguage => ({
  tokenizer: {
    root: [
      // Commands
      [/\b(SEARCH|DESCRIBE|SHOW|FROM|WHERE|FIELDS|RENAME|STATS|DEDUP|SORT|EVAL|HEAD|TOP|RARE|PARSE|AS|BY)\b/i, 'keyword'],
      
      // Functions
      [/\b(abs|ceil|floor|round|sqrt|log|exp|sin|cos|tan|avg|count|sum|min|max|first|last)\b/i, 'function'],
      
      // Operators
      [/[=!<>]+/, 'operator'],
      [/[+\-*/%]/, 'operator'],
      [/\b(AND|OR|NOT|IN|LIKE|BETWEEN)\b/i, 'operator'],
      
      // Strings
      [/"([^"\\]|\\.)*$/, 'string.invalid'],
      [/"/, { token: 'string.quote', bracket: '@open', next: '@string' }],
      [/'([^'\\]|\\.)*$/, 'string.invalid'],
      [/'/, { token: 'string.quote', bracket: '@open', next: '@string_single' }],
      
      // Numbers
      [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
      [/\d+/, 'number'],
      
      // Identifiers
      [/[a-zA-Z_][a-zA-Z0-9_]*/, 'identifier'],
      
      // Whitespace
      [/[ \t\r\n]+/, 'white'],
      
      // Comments
      [/\/\/.*$/, 'comment'],
      [/\/\*/, 'comment', '@comment'],
      
      // Delimiters
      [/[()[\]{}]/, '@brackets'],
      [/[,;]/, 'delimiter'],
      [/\|/, 'delimiter.pipe'],
    ],
    
    string: [
      [/[^\\"]+/, 'string'],
      [/\\./, 'string.escape.invalid'],
      [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }],
    ],
    
    string_single: [
      [/[^\\']+/, 'string'],
      [/\\./, 'string.escape.invalid'],
      [/'/, { token: 'string.quote', bracket: '@close', next: '@pop' }],
    ],
    
    comment: [
      [/[^\/*]+/, 'comment'],
      [/\/\*/, 'comment', '@push'],
      [/\*\//, 'comment', '@pop'],
      [/[\/*]/, 'comment'],
    ],
  },
});

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

  // Set monarch tokenizer
  monaco.languages.setMonarchTokensProvider(ID, createPPLMonarchLanguage());

  // Set up language features when the language is first used
  monaco.languages.onLanguage(ID, async () => {
    const workerProxyService = getPPLWorkerProxyService();
    
    try {
      await workerProxyService.setup();
      
      // Register completion provider
      monaco.languages.registerCompletionItemProvider(ID, {
        provideCompletionItems: async (model, position, context, token) => {
          try {
            const code = model.getValue();
            const offset = model.getOffsetAt(position);
            const completions = await workerProxyService.getCompletions(code, offset);
            
            return {
              suggestions: completions.map(completion => ({
                ...completion,
                range: completion.range || new monaco.Range(
                  position.lineNumber,
                  position.column,
                  position.lineNumber,
                  position.column
                ),
              })),
            };
          } catch (error) {
            console.error('PPL completion provider error:', error);
            return { suggestions: [] };
          }
        },
      });

      // Register hover provider
      monaco.languages.registerHoverProvider(ID, {
        provideHover: async (model, position, token) => {
          try {
            const word = model.getWordAtPosition(position);
            if (!word) return null;

            // Provide basic hover information for PPL keywords
            const pplKeywords = [
              'SEARCH', 'DESCRIBE', 'SHOW', 'FROM', 'WHERE', 'FIELDS', 'RENAME', 'STATS',
              'DEDUP', 'SORT', 'EVAL', 'HEAD', 'TOP', 'RARE', 'PARSE', 'AS', 'BY'
            ];

            if (pplKeywords.includes(word.word.toUpperCase())) {
              return {
                range: new monaco.Range(
                  position.lineNumber,
                  word.startColumn,
                  position.lineNumber,
                  word.endColumn
                ),
                contents: [
                  { value: `**${word.word.toUpperCase()}**` },
                  { value: `PPL ${word.word.toLowerCase()} command` },
                ],
              };
            }

            return null;
          } catch (error) {
            console.error('PPL hover provider error:', error);
            return null;
          }
        },
      });

      // Set up error markers
      setupErrorMarkers();
      
      console.log('PPL language features registered successfully');
    } catch (error) {
      console.error('Failed to setup PPL language features:', error);
    }
  });
};

/**
 * Set up error markers for PPL syntax validation
 */
const setupErrorMarkers = () => {
  const allDisposables: monaco.IDisposable[] = [];
  const workerProxyService = getPPLWorkerProxyService();

  const updateAnnotations = async (model: monaco.editor.IModel): Promise<void> => {
    if (model.isDisposed() || model.getLanguageId() !== ID) {
      return;
    }

    try {
      const markers = await workerProxyService.getAnnotations(model.uri);
      monaco.editor.setModelMarkers(model, OWNER, markers);
    } catch (error) {
      console.error('Failed to update PPL annotations:', error);
      // Clear markers on error
      monaco.editor.setModelMarkers(model, OWNER, []);
    }
  };

  const onModelAdd = (model: monaco.editor.IModel) => {
    if (model.getLanguageId() === ID) {
      allDisposables.push(
        model.onDidChangeContent(async () => {
          // Debounce validation to avoid excessive worker calls
          setTimeout(() => updateAnnotations(model), 500);
        })
      );

      // Initial validation
      updateAnnotations(model);
    }
  };

  // Listen for new models
  allDisposables.push(monaco.editor.onDidCreateModel(onModelAdd));

  // Validate existing models
  monaco.editor.getModels().forEach(onModelAdd);

  return () => {
    allDisposables.forEach(d => d.dispose());
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

/**
 * Initialize PPL language support
 */
export const initializePPLLanguage = async (): Promise<void> => {
  registerPPLLanguage();
  
  // Pre-initialize the worker proxy service
  const workerProxyService = getPPLWorkerProxyService();
  await workerProxyService.setup();
  
  console.log('PPL language support initialized');
};

/**
 * Cleanup PPL language support
 */
export const cleanupPPLLanguage = (): void => {
  // Clear all PPL-related markers
  monaco.editor.getModels().forEach(model => {
    if (model.getLanguageId() === ID) {
      monaco.editor.setModelMarkers(model, OWNER, []);
    }
  });

  // Stop worker proxy service
  const workerProxyService = getPPLWorkerProxyService();
  workerProxyService.stop();
  
  console.log('PPL language support cleaned up');
};