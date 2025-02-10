/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { SavedObjectsClientContract } from 'opensearch-dashboards/public';
import { map } from 'rxjs/operators';
import { i18n } from '@osd/i18n';
import {
  DEFAULT_DATA,
  DataStructure,
  DataStructureCustomMeta,
  Dataset,
} from '../../../../../common';
import { DatasetTypeConfig } from '../types';
import { getSearchService, getIndexPatterns } from '../../../../services';
import { injectMetaToDataStructures } from './utils';

export const DELIMITER = '::';

export const indexTypeConfig: DatasetTypeConfig = {
  id: DEFAULT_DATA.SET_TYPES.INDEX,
  title: 'Indexes',
  meta: {
    icon: { type: 'logoOpenSearch' },
    tooltip: 'OpenSearch Indexes',
    searchOnLoad: true,
  },

  toDataset: (path) => {
    const index = path[path.length - 1];
    const dataSource = path.find((ds) => ds.type === 'DATA_SOURCE');
    const indexMeta = index.meta as DataStructureCustomMeta;
    return {
      id: index.id,
      title: index.title,
      type: DEFAULT_DATA.SET_TYPES.INDEX,
      timeFieldName: indexMeta?.timeFieldName,
      dataSource: dataSource?.parent
        ? {
            id: dataSource.parent.id,
            title: dataSource.parent.title,
            type: dataSource.parent.type,
          }
        : DEFAULT_DATA.STRUCTURES.LOCAL_DATASOURCE,
    };
  },

  fetch: async (services, path) => {
    const dataStructure = path[path.length - 1];
    const httpClient = services.http;

    switch (dataStructure.type) {
      case 'DATA_SOURCE': {
        const datasourceId = dataStructure.parent?.id;
        const connectionAlias = dataStructure.id;
        const indices =
          connectionAlias === 'local-cluster'
            ? await fetchIndices(dataStructure.parent!)
            : await fetchRemoteClusterIndexes(datasourceId, connectionAlias, httpClient);
        return {
          ...dataStructure,
          hasNext: false,
          columnHeader: 'Indexes',
          children: indices.map((indexName) => ({
            id:
              connectionAlias === 'local-cluster'
                ? `${datasourceId}::${indexName}`
                : `${datasourceId}::${connectionAlias}:${indexName}`,
            title: indexName,
            type: 'INDEX',
          })),
        };
      }

      case 'CONNECTION_ALIAS': {
        const remoteConnections = await fetchRemoteClusterConnectionAliases(
          dataStructure.id,
          httpClient
        );
        return {
          ...dataStructure,
          hasNext: true,
          columnHeader: 'Connections',
          children: remoteConnections.map((connectionAlias) => ({
            id: connectionAlias,
            parent: dataStructure,
            title: connectionAlias,
            type: 'DATA_SOURCE',
          })),
        };
      }

      default: {
        const dataSources = await fetchDataSources(services.savedObjects.client);
        return {
          ...dataStructure,
          columnHeader: 'Data sources',
          hasNext: true,
          children: dataSources,
        };
      }
    }
  },

  fetchFields: async (dataset) => {
    const fields = await getIndexPatterns().getFieldsForWildcard({
      pattern: dataset.title,
      dataSourceId: dataset.dataSource?.id,
    });
    return fields.map((field: any) => ({
      name: field.name,
      type: field.type,
      aggregatable: field?.aggregatable,
    }));
  },

  supportedLanguages: (dataset: Dataset): string[] => {
    return ['SQL', 'PPL'];
  },

  getSampleQueries: (dataset: Dataset, language: string) => {
    switch (language) {
      case 'PPL':
        return [
          {
            title: i18n.translate('data.indexType.sampleQuery.basicPPLQuery', {
              defaultMessage: 'Sample query for PPL',
            }),
            query: `source = ${dataset.title}`,
          },
        ];
      case 'SQL':
        return [
          {
            title: i18n.translate('data.indexType.sampleQuery.basicSQLQuery', {
              defaultMessage: 'Sample query for SQL',
            }),
            query: `SELECT * FROM ${dataset.title} LIMIT 10`,
          },
        ];
    }
  },
};

const fetchDataSources = async (client: SavedObjectsClientContract) => {
  const response = await client.find<any>({
    type: 'data-source',
    perPage: 10000,
  });
  const dataSources: DataStructure[] = response.savedObjects.map((savedObject) => ({
    id: savedObject.id,
    title: savedObject.attributes.title,
    type: 'CONNECTION_ALIAS',
  }));

  return injectMetaToDataStructures(dataSources);
};

const fetchIndices = async (dataStructure: DataStructure): Promise<string[]> => {
  const search = getSearchService();
  const buildSearchRequest = () => ({
    params: {
      ignoreUnavailable: true,
      expand_wildcards: 'all',
      index: '*',
      body: {
        size: 0,
        aggs: {
          indices: {
            terms: {
              field: '_index',
              size: 100,
            },
          },
        },
      },
    },
    dataSourceId: dataStructure.id,
  });

  const searchResponseToArray = (response: any) => {
    const { rawResponse } = response;
    if (!rawResponse.aggregations) {
      return [];
    }

    return rawResponse.aggregations.indices.buckets.map((bucket: { key: string }) => {
      const key = bucket.key;
      // Note: Index names cannot contain ':' or '::' in OpenSearch, so these delimiters
      // are guaranteed not to be part of the regular format of index name
      const parts = key.split(DELIMITER);
      const lastPart = parts[parts.length - 1] || key;
      // extract index name or return original key if pattern doesn't match
      return lastPart.split(':')[0] || key;
    });
  };

  return search
    .getDefaultSearchInterceptor()
    .search(buildSearchRequest())
    .pipe(map(searchResponseToArray))
    .toPromise();
};

const fetchRemoteClusterConnectionAliases = async (datasourceId, http) => {
  const response = await http.get(`/api/enhancements/remoteclusters`, {
    query: {
      dataSourceId: datasourceId,
    },
  });
  return ['local-cluster', ...response.map((remoteCluster) => remoteCluster.connectionAlias)];
};

const fetchRemoteClusterIndexes = async (datasourceId, connectionAlias, http) => {
  const response = await http.get(`/api/enhancements/remoteclusters/indexes`, {
    query: {
      dataSourceId: datasourceId,
      connectionAlias,
    },
  });
  return response;
};
