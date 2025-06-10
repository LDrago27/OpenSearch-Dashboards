/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable-next-line @osd/eslint/module_migration */
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import { createParser, Parser, ParseResult } from '../grammar';

export class PPLWorker {
  constructor(private ctx: monaco.worker.IWorkerContext) {}
  private parser: Parser | undefined;

  async parse(modelUri: string): Promise<ParseResult | undefined> {
    if (!this.parser) {
      this.parser = createParser();
    }
    const model = this.ctx.getMirrorModels().find((m) => m.uri.toString() === modelUri);
    if (model) {
      return this.parser(model.getValue());
    }
  }
}
