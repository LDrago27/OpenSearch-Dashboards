/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { monaco } from '../monaco';
import { PPLWorker } from './worker';
import { ID } from './constants';

export interface ParseResult {
  annotations: Array<{
    at: number;
    text: string;
    type: 'error' | 'warning';
  }>;
}

export class WorkerProxyService {
  private worker: monaco.editor.MonacoWebWorker<PPLWorker> | undefined;

  public async getAnnos(modelUri: monaco.Uri): Promise<ParseResult | undefined> {
    if (!this.worker) {
      throw new Error('Worker Proxy Service has not been setup!');
    }
    await this.worker.withSyncedResources([modelUri]);
    const proxy = await this.worker.getProxy();
    return proxy.parse(modelUri.toString());
  }

  public setup() {
    this.worker = monaco.editor.createWebWorker({ label: ID, moduleId: '' });
  }

  public stop() {
    if (this.worker) this.worker.dispose();
  }
}
