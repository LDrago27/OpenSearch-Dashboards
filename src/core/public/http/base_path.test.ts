/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { BasePath } from './base_path';

describe('BasePath', () => {
  describe('#get()', () => {
    it('returns an empty string if no basePath not provided', () => {
      expect(new BasePath().get()).toBe('');
    });

    it('returns basePath value if provided', () => {
      expect(new BasePath('/foo').get()).toBe('/foo');
    });

    describe('#prepend()', () => {
      it('adds the base path to the path if it is relative and starts with a slash', () => {
        const basePath = new BasePath('/foo/bar');

        expect(basePath.prepend('/a/b')).toBe('/foo/bar/a/b');
      });

      it('leaves the query string and hash of path unchanged', () => {
        const basePath = new BasePath('/foo/bar');

        expect(basePath.prepend('/a/b?x=y#c/d/e')).toBe('/foo/bar/a/b?x=y#c/d/e');
      });

      it('returns the path unchanged if it does not start with a slash', () => {
        const basePath = new BasePath('/foo/bar');

        expect(basePath.prepend('a/b')).toBe('a/b');
      });

      it('returns the path unchanged it it has a hostname', () => {
        const basePath = new BasePath('/foo/bar');

        expect(basePath.prepend('http://localhost:5601/a/b')).toBe('http://localhost:5601/a/b');
      });
    });

    describe('#remove()', () => {
      it('removes the basePath if relative path starts with it', () => {
        const basePath = new BasePath('/foo/bar');

        expect(basePath.remove('/foo/bar/a/b')).toBe('/a/b');
      });

      it('leaves query string and hash intact', () => {
        const basePath = new BasePath('/foo/bar');

        expect(basePath.remove('/foo/bar/a/b?c=y#1234')).toBe('/a/b?c=y#1234');
      });

      it('ignores urls with hostnames', () => {
        const basePath = new BasePath('/foo/bar');

        expect(basePath.remove('http://localhost:5601/foo/bar/a/b')).toBe(
          'http://localhost:5601/foo/bar/a/b'
        );
      });

      it('returns slash if path is just basePath', () => {
        const basePath = new BasePath('/foo/bar');

        expect(basePath.remove('/foo/bar')).toBe('/');
      });

      it('returns full path if basePath is not its own segment', () => {
        const basePath = new BasePath('/foo/bar');

        expect(basePath.remove('/foo/barhop')).toBe('/foo/barhop');
      });
    });
  });

  describe('serverBasePath', () => {
    it('defaults to basePath', () => {
      expect(new BasePath('/foo/bar').serverBasePath).toEqual('/foo/bar');
    });

    it('returns value when passed into constructor', () => {
      expect(new BasePath('/foo/bar', '/foo').serverBasePath).toEqual('/foo');
    });
  });

  describe('clientBasePath', () => {
    it('get with clientBasePath provided when construct', () => {
      expect(new BasePath('/foo/bar', '/foo/bar', '/client_base_path').get()).toEqual(
        '/foo/bar/client_base_path'
      );
    });

    it('getBasePath with clientBasePath provided when construct', () => {
      expect(new BasePath('/foo/bar', '/foo/bar', '/client_base_path').getBasePath()).toEqual(
        '/foo/bar'
      );
    });

    it('prepend with clientBasePath provided when construct', () => {
      expect(new BasePath('/foo/bar', '/foo/bar', '/client_base_path').prepend('/prepend')).toEqual(
        '/foo/bar/client_base_path/prepend'
      );
    });

    it('construct with clientBasePath provided but calls prepend with withoutClientBasePath is true', () => {
      expect(
        new BasePath('/foo/bar', '/foo/bar', '/client_base_path').prepend('/prepend', {
          withoutClientBasePath: true,
        })
      ).toEqual('/foo/bar/prepend');
    });

    it('remove with clientBasePath provided when construct', () => {
      expect(
        new BasePath('/foo/bar', '/foo/bar', '/client_base_path').remove(
          '/foo/bar/client_base_path/remove'
        )
      ).toEqual('/remove');
    });

    it('construct with clientBasePath provided but calls remove with withoutClientBasePath is true', () => {
      expect(
        new BasePath('/foo/bar', '/foo/bar', '/client_base_path').remove(
          '/foo/bar/client_base_path/remove',
          {
            withoutClientBasePath: true,
          }
        )
      ).toEqual('/client_base_path/remove');
    });
  });
});
