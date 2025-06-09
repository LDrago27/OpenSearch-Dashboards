/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { registerWorker } from '../worker_store';
// @ts-ignore
import pplWorkerSrc from '!!raw-loader!../../target/public/ppl.editor.worker.js';

// Register the PPL worker in the worker store
registerWorker('ppl', pplWorkerSrc);

// Export language service
export { 
  registerPPLLanguage, 
  createPPLModel, 
  initializePPLLanguage, 
  cleanupPPLLanguage 
} from './language';

// Export worker proxy service
export { 
  PPLWorkerProxyService, 
  getPPLWorkerProxyService, 
  initializePPLWorkerProxyService, 
  stopPPLWorkerProxyService 
} from './worker_proxy_service';

// Export types
export type { 
  PPLValidationResult, 
  PPLTokenizationResult, 
  PPLCompletionResult, 
  PPLWorkerResponse, 
  PPLWorkerRequest 
} from './worker_proxy_service';

// Export tokenizer
export { 
  PPLTokenizer, 
  createPPLTokenizer, 
  createPPLLanguageConfiguration 
} from './ppl_tokenizer';

export type { PPLToken } from './ppl_tokenizer';

// Export constants
export { ID } from './constants';