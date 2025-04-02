/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { HttpSetup } from 'src/core/public';
import { EuiIcon, EuiToolTip } from '@elastic/eui';
import { i18n } from '@osd/i18n';
import React from 'react';
import { DataSourceTableItem } from '../types';

export const getRemoteClusterConnections = async (dataSourceId: string, http: HttpSetup) => {
  const response = await http.get(`/remote_cluster/list`, {
    query: {
      dataSourceId,
    },
  });

  return (
    response.map((remoteClusterConnection: { connectionAlias: any }) => {
      return {
        id: `${dataSourceId}-${remoteClusterConnection.connectionAlias}`,
        title: remoteClusterConnection.connectionAlias,
        name: remoteClusterConnection.connectionAlias,
        type: 'Opensearch cross-cluster Search',
        engine: 'Opensearch cross-cluster Search',
      };
    }) ?? []
  );
};

export const populateRemoteClusterConnectionForDatasources = async (
  datasources: DataSourceTableItem[],
  http: HttpSetup
) => {
  // populates the connection alias for opensearch and elastic search based Datasources
  const promises = datasources.map(async (ds: DataSourceTableItem) => {
    if (ds.engine === 'Opensearch' || ds.engine === 'Elasticsearch') {
      const relatedConnections = await getRemoteClusterConnections(ds.id, http);
      return {
        ...ds,
        relatedDataSourceConnection: relatedConnections,
        append:
          relatedConnections.length > 0 ? (
            <EuiToolTip
              content={i18n.translate(
                'indexPatternManagement.public.createIndexPatternWizard.stepDataSource.header.remoteClusterBadge',
                {
                  defaultMessage: 'Contains Remote Clusters',
                }
              )}
            >
              <EuiIcon type="iInCircle" />
            </EuiToolTip>
          ) : null,
      };
    }
    return ds;
  });
  return await Promise.all(promises);
};
