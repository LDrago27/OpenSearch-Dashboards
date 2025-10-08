/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { RecentQueriesTable, MAX_RECENT_QUERY_SIZE } from './recent_query';
import { QueryStringManager } from '../../query_string_manager';
import { coreMock } from '../../../../../../../core/public/mocks';
import { DataStorage } from 'src/plugins/data/common';
import { ISearchInterceptor } from '../../../../search';
import { Query } from '../../../../../common/query';

// Mock the services module
jest.mock('../../../../services', () => ({
  getApplication: jest.fn().mockReturnValue({
    currentAppId$: {
      subscribe: jest.fn((callback) => {
        callback('test-app-id');
        return { unsubscribe: jest.fn() };
      }),
    },
  }),
}));

describe('RecentQueriesTable', () => {
  let queryStringManager: QueryStringManager;
  let storage: DataStorage;
  let sessionStorage: DataStorage;
  let mockSearchInterceptor: jest.Mocked<ISearchInterceptor>;

  const advanceTimersByMs = async (ms: number = 100) => {
    jest.advanceTimersByTime(ms);
    // Allow any pending promises to resolve
    await Promise.resolve();
  };

  beforeEach(() => {
    jest.useFakeTimers();
    // Reset mocks between tests
    jest.clearAllMocks();

    storage = new DataStorage(window.localStorage, 'opensearchDashboards.');
    storage.clear();
    sessionStorage = new DataStorage(window.sessionStorage, 'opensearchDashboards.');
    sessionStorage.clear();

    mockSearchInterceptor = ({
      search: jest.fn(),
    } as unknown) as jest.Mocked<ISearchInterceptor>;

    const uiSettings = coreMock.createSetup().uiSettings;

    // Add default UI settings for tests
    uiSettings.get.mockImplementation((key) => {
      if (key === 'search:queryLanguage') return 'kuery';
      if (key === 'query:enhancements:enabled') return true;
      return undefined;
    });

    queryStringManager = new QueryStringManager(
      storage,
      sessionStorage,
      uiSettings,
      mockSearchInterceptor,
      coreMock.createStart().notifications
    );
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  test('MAX_RECENT_QUERY_SIZE is set to 10', () => {
    expect(MAX_RECENT_QUERY_SIZE).toBe(10);
  });

  test('RecentQueriesTable filters queries to MAX_RECENT_QUERY_SIZE', async () => {
    const mockOnClickRecentQuery = jest.fn();

    // Render the component first
    render(
      <RecentQueriesTable
        queryString={queryStringManager}
        onClickRecentQuery={mockOnClickRecentQuery}
        isVisible={true}
      />
    );

    // Add more than MAX_RECENT_QUERY_SIZE queries with the default language (kuery)
    await act(async () => {
      for (let i = 1; i <= 15; i++) {
        const query: Query = { query: `test query ${i}`, language: 'kuery' };
        queryStringManager.addToQueryHistory(query);
        await advanceTimersByMs();
      }
      queryStringManager.setQuery({ query: '', language: 'kuery' });
    });

    // Should only display MAX_RECENT_QUERY_SIZE rows
    const rows = screen.getAllByRole('row');
    // +1 for header row
    expect(rows).toHaveLength(MAX_RECENT_QUERY_SIZE + 1);
  });

  test('RecentQueriesTable filters queries by current language', async () => {
    // Add queries with different languages
    const sqlQuery: Query = { query: 'SELECT * FROM table', language: 'sql' };
    const pplQuery: Query = { query: 'source=table', language: 'ppl' };
    const kueryQuery: Query = { query: 'field:value', language: 'kuery' };

    await act(async () => {
      queryStringManager.addToQueryHistory(sqlQuery);
      await advanceTimersByMs();
      queryStringManager.addToQueryHistory(pplQuery);
      await advanceTimersByMs();
      queryStringManager.addToQueryHistory(kueryQuery);
      await advanceTimersByMs();

      // Set current language to SQL
      queryStringManager.setQuery({ query: '', language: 'sql' });
    });

    const mockOnClickRecentQuery = jest.fn();

    render(
      <RecentQueriesTable
        queryString={queryStringManager}
        onClickRecentQuery={mockOnClickRecentQuery}
        isVisible={true}
      />
    );

    // Should only show SQL queries
    expect(screen.getByText('SELECT * FROM table')).toBeInTheDocument();
    expect(screen.queryByText('source=table')).not.toBeInTheDocument();
    expect(screen.queryByText('field:value')).not.toBeInTheDocument();
  });
});
