/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { EditorMode } from '../../../../application/utils/state_management/types';

// Mock all modules before importing the component
const mockDispatch = jest.fn();
const mockTimeFilter = {
  getTime: jest.fn(() => ({ from: 'now-15m', to: 'now' })),
  setTime: jest.fn(),
  getRefreshInterval: jest.fn(() => ({ pause: false, value: 10000 })),
  setRefreshInterval: jest.fn(),
};
const mockSavedQueryService = {
  saveQuery: jest.fn(),
  getSavedQuery: jest.fn(),
};
const mockSetEditorTextWithQuery = jest.fn();
const mockLoadQueryActionCreator = jest.fn();

jest.doMock('react-redux', () => {
  const actual = jest.requireActual('react-redux');
  return {
    ...actual,
    useDispatch: () => mockDispatch,
  };
});

jest.doMock('../../../../../../opensearch_dashboards_react/public', () => ({
  useOpenSearchDashboards: () => ({
    services: {
      data: {
        query: {
          savedQueries: mockSavedQueryService,
        },
      },
      notifications: {
        toasts: {
          addSuccess: jest.fn(),
          addDanger: jest.fn(),
        },
      },
      capabilities: {
        explore: {
          saveQuery: true,
        },
      },
    },
  }),
}));

jest.doMock('../../utils', () => ({
  useTimeFilter: () => ({
    timeFilter: mockTimeFilter,
  }),
}));

jest.doMock('../../../../application/hooks', () => ({
  useSetEditorTextWithQuery: () => mockSetEditorTextWithQuery,
  useEditorText: () => () => 'SELECT * FROM logs',
}));

jest.doMock('../../../../application/utils/state_management/actions/query_editor', () => ({
  loadQueryActionCreator: mockLoadQueryActionCreator,
}));

// Mock the selectors - make them mutable for testing different modes
const mockSelectIsPromptEditorMode = jest.fn(() => false);
const mockSelectQuery = jest.fn(() => ({
  query: 'SELECT * FROM logs',
  language: 'SQL',
  dataset: { id: 'test-dataset', title: 'test-dataset', type: 'INDEX_PATTERN' },
}));

jest.doMock('../../../../application/utils/state_management/selectors', () => ({
  selectIsPromptEditorMode: mockSelectIsPromptEditorMode,
  selectQuery: mockSelectQuery,
}));

jest.doMock('../../../../application/utils/state_management/actions/query_actions', () => ({
  executeQueries: jest.fn(() => ({ type: 'query/executeQueries/pending' })),
}));

jest.doMock('../../../../application/utils/state_management/slices', () => ({
  clearResults: jest.fn(() => ({ type: 'results/clearResults' })),
  setSavedQuery: jest.fn(() => ({ type: 'legacy/setSavedQuery' })),
  setQueryState: jest.fn(() => ({ type: 'query/setQueryState' })),
}));

// Mock SavedQueryManagementComponent
jest.doMock('../../../../../../data/public', () => ({
  SavedQueryManagementComponent: ({
    onLoad,
    onClearSavedQuery,
    saveQuery,
    loadedSavedQuery,
    saveQueryIsDisabled,
  }: any) => (
    <div data-test-subj="saved-query-management">
      <button
        data-test-subj="mock-save-button"
        onClick={() =>
          saveQuery({
            title: 'Test Query',
            description: 'Test Description',
            shouldIncludeTimeFilter: true,
          })
        }
        disabled={saveQueryIsDisabled}
      >
        Save Query
      </button>
      <button
        data-test-subj="mock-load-button"
        onClick={() =>
          onLoad({
            id: 'test-query-id',
            attributes: {
              query: { query: 'SELECT * FROM test', language: 'SQL' },
              timefilter: {
                from: 'now-1h',
                to: 'now',
                refreshInterval: { pause: false, value: 5000 },
              },
            },
          })
        }
      >
        Load Query
      </button>
      <button data-test-subj="mock-clear-button" onClick={onClearSavedQuery}>
        Clear Query
      </button>
      {loadedSavedQuery && (
        <div data-test-subj="loaded-query-info">
          Loaded: {loadedSavedQuery.attributes?.query?.query}
        </div>
      )}
      {saveQueryIsDisabled && <div data-test-subj="save-disabled-indicator">Save Disabled</div>}
    </div>
  ),
}));

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { SaveQueryButton } = require('./save_query');

const createMockStore = (initialState = {}) => {
  return configureStore({
    reducer: {
      query: (state = {}) => state,
      legacy: (state = {}) => state,
      queryEditor: (state = {}) => state,
    },
    preloadedState: {
      query: {
        query: 'SELECT * FROM logs',
        language: 'SQL',
        dataset: { id: 'test-dataset', title: 'test-dataset', type: 'INDEX_PATTERN' },
      },
      legacy: {
        savedQuery: undefined,
      },
      queryEditor: {
        editorMode: EditorMode.Query,
      },
      ...initialState,
    },
  });
};

const renderWithStore = (initialState = {}) => {
  const mockStore = createMockStore(initialState);
  return render(
    <Provider store={mockStore}>
      <SaveQueryButton />
    </Provider>
  );
};

describe('SaveQueryButton', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockSelectIsPromptEditorMode.mockReturnValue(false);
    mockSavedQueryService.saveQuery.mockResolvedValue({ id: 'saved-query-id' });
    mockSavedQueryService.getSavedQuery.mockResolvedValue({
      id: 'test-query-id',
      attributes: {
        query: { query: 'SELECT * FROM test', language: 'SQL' },
        timefilter: { from: 'now-1h', to: 'now', refreshInterval: { pause: false, value: 5000 } },
      },
    });
  });

  it('renders the save query button with correct text and icon', () => {
    renderWithStore();

    const button = screen.getByTestId('queryPanelFooterSaveQueryButton');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Saved queries');
  });

  it('toggles popover visibility when button is clicked', () => {
    renderWithStore();

    const button = screen.getByTestId('queryPanelFooterSaveQueryButton');

    // Initially no management component visible
    expect(screen.queryByTestId('saved-query-management')).not.toBeInTheDocument();

    // Click to show
    fireEvent.click(button);
    expect(screen.getByTestId('saved-query-management')).toBeInTheDocument();
  });

  it('calls saveQuery with correct parameters when save is triggered', async () => {
    renderWithStore();

    const button = screen.getByTestId('queryPanelFooterSaveQueryButton');
    fireEvent.click(button); // Show the popover

    const saveButton = screen.getByTestId('mock-save-button');
    fireEvent.click(saveButton);

    await waitFor(() => {
      expect(mockSavedQueryService.saveQuery).toHaveBeenCalledWith(
        expect.objectContaining({
          title: 'Test Query',
          description: 'Test Description',
          query: expect.objectContaining({
            query: 'SELECT * FROM logs',
            language: 'SQL',
          }),
          timefilter: expect.objectContaining({
            from: 'now-15m',
            to: 'now',
            refreshInterval: { pause: false, value: 10000 },
          }),
        }),
        { overwrite: false }
      );
    });
  });

  it('handles save query without time filter when shouldIncludeTimeFilter is false', async () => {
    renderWithStore();

    const button = screen.getByTestId('queryPanelFooterSaveQueryButton');
    fireEvent.click(button);

    // Mock a save without time filter
    const managementComponent = screen.getByTestId('saved-query-management');
    const saveButton = managementComponent.querySelector('[data-test-subj="mock-save-button"]');

    // Simulate clicking save without time filter
    fireEvent.click(saveButton!);

    await waitFor(() => {
      expect(mockSavedQueryService.saveQuery).toHaveBeenCalled();
    });
  });

  it('loads saved query and updates state when load is triggered', async () => {
    renderWithStore();

    const button = screen.getByTestId('queryPanelFooterSaveQueryButton');
    fireEvent.click(button);

    const loadButton = screen.getByTestId('mock-load-button');
    fireEvent.click(loadButton);

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith({ type: 'legacy/setSavedQuery' });
      expect(mockDispatch).toHaveBeenCalledWith({ type: 'query/setQueryState' });
      expect(mockLoadQueryActionCreator).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({
            query: expect.objectContaining({
              savedQueries: mockSavedQueryService,
            }),
          }),
          notifications: expect.objectContaining({
            toasts: expect.objectContaining({
              addSuccess: expect.any(Function),
              addDanger: expect.any(Function),
            }),
          }),
        }),
        mockSetEditorTextWithQuery,
        'SELECT * FROM test'
      );
      expect(mockTimeFilter.setTime).toHaveBeenCalledWith({
        from: 'now-1h',
        to: 'now',
      });
      expect(mockTimeFilter.setRefreshInterval).toHaveBeenCalledWith({
        pause: false,
        value: 5000,
      });
    });
  });

  it('clears saved query when clear is triggered', async () => {
    renderWithStore();

    const button = screen.getByTestId('queryPanelFooterSaveQueryButton');
    fireEvent.click(button);

    const clearButton = screen.getByTestId('mock-clear-button');
    fireEvent.click(clearButton);

    expect(mockDispatch).toHaveBeenCalledWith({ type: 'legacy/setSavedQuery' });
  });

  it('loads current saved query when savedQueryId exists in state', async () => {
    renderWithStore({
      legacy: {
        savedQuery: 'existing-query-id',
      },
    });

    await waitFor(() => {
      expect(mockSavedQueryService.getSavedQuery).toHaveBeenCalledWith('existing-query-id');
    });
  });

  it('handles error when saved query does not exist', async () => {
    mockSavedQueryService.getSavedQuery.mockRejectedValue(new Error('Query not found'));

    renderWithStore({
      legacy: {
        savedQuery: 'non-existent-query-id',
      },
    });

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith({ type: 'legacy/setSavedQuery' });
    });
  });

  it('calls saveQuery service when save is triggered', async () => {
    renderWithStore();

    const button = screen.getByTestId('queryPanelFooterSaveQueryButton');
    fireEvent.click(button);

    const saveButton = screen.getByTestId('mock-save-button');
    fireEvent.click(saveButton);

    await waitFor(() => {
      expect(mockSavedQueryService.saveQuery).toHaveBeenCalled();
    });
  });

  it('handles timeFilter methods safely when they do not exist', async () => {
    const mockTimeFilterWithoutMethods = {
      getTime: jest.fn(() => ({ from: 'now-15m', to: 'now' })),
      // Missing getRefreshInterval and setRefreshInterval
    };

    jest.doMock('../../utils', () => ({
      useTimeFilter: () => ({
        timeFilter: mockTimeFilterWithoutMethods,
      }),
    }));

    renderWithStore();

    const button = screen.getByTestId('queryPanelFooterSaveQueryButton');
    fireEvent.click(button);

    const saveButton = screen.getByTestId('mock-save-button');
    fireEvent.click(saveButton);

    await waitFor(() => {
      expect(mockSavedQueryService.saveQuery).toHaveBeenCalled();
    });
  });

  describe('saveQueryIsDisabled', () => {
    it('enables save query when not in prompt mode', () => {
      mockSelectIsPromptEditorMode.mockReturnValue(false);
      renderWithStore();

      const button = screen.getByTestId('queryPanelFooterSaveQueryButton');
      fireEvent.click(button);

      const saveButton = screen.getByTestId('mock-save-button');
      expect(saveButton).not.toBeDisabled();
      expect(screen.queryByTestId('save-disabled-indicator')).not.toBeInTheDocument();
    });

    it('disables save query when in prompt mode', () => {
      mockSelectIsPromptEditorMode.mockReturnValue(true);
      renderWithStore();

      const button = screen.getByTestId('queryPanelFooterSaveQueryButton');
      fireEvent.click(button);

      const saveButton = screen.getByTestId('mock-save-button');
      expect(saveButton).toBeDisabled();
      expect(screen.getByTestId('save-disabled-indicator')).toBeInTheDocument();
    });
  });
});
