/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createPPLTokenizer, createPPLLanguageConfiguration } from './index';
import { monaco } from '../monaco';

/**
 * Example usage of the PPL tokenizer with Monaco editor
 */
export function setupPPLLanguageSupport() {
  const languageId = 'ppl';
  
  // Register the PPL language
  monaco.languages.register({ id: languageId });
  
  // Set up language configuration
  const languageConfig = createPPLLanguageConfiguration();
  monaco.languages.setLanguageConfiguration(languageId, languageConfig);
  
  // Create tokenizer instance
  const tokenizer = createPPLTokenizer();
  
  // Register completion provider
  monaco.languages.registerCompletionItemProvider(languageId, {
    provideCompletionItems: (model, position) => {
      const textUntilPosition = model.getValueInRange({
        startLineNumber: 1,
        startColumn: 1,
        endLineNumber: position.lineNumber,
        endColumn: position.column,
      });
      
      const suggestions = tokenizer.getCompletionSuggestions(
        textUntilPosition,
        textUntilPosition.length
      );
      
      return { suggestions };
    },
  });
  
  // Register hover provider for syntax validation
  monaco.languages.registerHoverProvider(languageId, {
    provideHover: (model, position) => {
      const value = model.getValue();
      const validation = tokenizer.validateSyntax(value);
      
      if (!validation.isValid) {
        return {
          range: new monaco.Range(
            position.lineNumber,
            1,
            position.lineNumber,
            model.getLineMaxColumn(position.lineNumber)
          ),
          contents: [
            { value: '**Syntax Errors:**' },
            ...validation.errors.map(error => ({ value: `- ${error}` })),
          ],
        };
      }
      
      return null;
    },
  });
  
  return tokenizer;
}

/**
 * Example of how to use the tokenizer directly
 */
export function exampleTokenizerUsage() {
  const tokenizer = createPPLTokenizer();
  
  // Example PPL query
  const pplQuery = `
    SEARCH source=logs 
    | WHERE status_code > 400 
    | STATS COUNT(*) BY status_code 
    | SORT COUNT(*) DESC
  `.trim();
  
  // Tokenize the query
  const tokens = tokenizer.tokenize(pplQuery);
  console.log('Tokens:', tokens);
  
  // Validate syntax
  const validation = tokenizer.validateSyntax(pplQuery);
  console.log('Validation:', validation);
  
  // Get completions (at end of query)
  const completions = tokenizer.getCompletionSuggestions(pplQuery, pplQuery.length);
  console.log('Completions:', completions);
  
  return {
    tokens,
    validation,
    completions,
  };
}