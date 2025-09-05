/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import semver from 'semver';

export function isVersionCompatible(minVersion: string, currentVersion: string): boolean {
  return semver.gte(currentVersion, minVersion);
}

export function compareVersions(version1: string, version2: string): number {
  return semver.compare(version1, version2);
}
