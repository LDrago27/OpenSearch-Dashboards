/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BehaviorSubject, of } from 'rxjs';
import { render, fireEvent, screen } from '@testing-library/react';
import { I18nProvider } from '@osd/i18n/react';
import { coreMock } from '../../../../../core/public/mocks';
import { navigateToWorkspaceDetail } from '../utils/workspace';
import { OpenSearchDashboardsContextProvider } from '../../../../../plugins/opensearch_dashboards_react/public';
import { WORKSPACE_USE_CASES } from '../../../common/constants';
import { WorkspaceList } from './index';

jest.mock('../utils/workspace');

jest.mock('../delete_workspace_modal', () => ({
  DeleteWorkspaceModal: ({ onClose }: { onClose: () => void }) => (
    <div aria-label="mock delete workspace modal">
      <button onClick={onClose} aria-label="mock delete workspace modal button" />
    </div>
  ),
}));

function getWrapWorkspaceListInContext(
  workspaceList = [
    { id: 'id1', name: 'name1', features: ['use-case-all'] },
    { id: 'id2', name: 'name2' },
    { id: 'id3', name: 'name3', features: ['use-case-observability'] },
  ],
  isDashboardAdmin = true
) {
  const coreStartMock = coreMock.createStart();
  coreStartMock.application.capabilities = {
    ...coreStartMock.application.capabilities,
    dashboards: {
      isDashboardAdmin,
    },
  };

  const services = {
    ...coreStartMock,
    workspaces: {
      workspaceList$: of(workspaceList),
    },
  };

  return (
    <I18nProvider>
      <OpenSearchDashboardsContextProvider services={services}>
        <WorkspaceList
          registeredUseCases$={new BehaviorSubject([WORKSPACE_USE_CASES.observability])}
        />
      </OpenSearchDashboardsContextProvider>
    </I18nProvider>
  );
}

describe('WorkspaceList', () => {
  it('should render title and table normally', () => {
    const { getByText, getByRole, container } = render(
      <WorkspaceList
        registeredUseCases$={new BehaviorSubject([WORKSPACE_USE_CASES.observability])}
      />
    );
    expect(getByText('Workspaces')).toBeInTheDocument();
    expect(getByRole('table')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  it('should render data in table based on workspace list data', async () => {
    const { getByText } = render(getWrapWorkspaceListInContext());

    // should display workspace names
    expect(getByText('name1')).toBeInTheDocument();
    expect(getByText('name2')).toBeInTheDocument();

    // should display use case
    expect(getByText('Analytics (All)')).toBeInTheDocument();
    expect(getByText('Observability')).toBeInTheDocument();
  });
  it('should be able to apply debounce search after input', async () => {
    const list = [
      { id: 'id1', name: 'name1' },
      { id: 'id2', name: 'name2' },
      { id: 'id3', name: 'name3' },
      { id: 'id4', name: 'name4' },
      { id: 'id5', name: 'name5' },
      { id: 'id6', name: 'name6' },
    ];
    const { getByText, getByRole, queryByText } = render(getWrapWorkspaceListInContext(list));
    expect(getByText('name1')).toBeInTheDocument();
    expect(queryByText('name6')).not.toBeInTheDocument();
    const input = getByRole('searchbox');
    fireEvent.change(input, {
      target: { value: 'nam' },
    });
    fireEvent.change(input, {
      target: { value: 'name6' },
    });
    expect(queryByText('name6')).not.toBeInTheDocument();
  });

  it('should be able to switch workspace after clicking name', async () => {
    const { getByText } = render(getWrapWorkspaceListInContext());
    const nameLink = getByText('name1');
    fireEvent.click(nameLink);
    expect(navigateToWorkspaceDetail).toBeCalled();
  });

  it('should be able to update workspace after clicking name', async () => {
    const { getAllByTestId } = render(getWrapWorkspaceListInContext());
    const editIcon = getAllByTestId('workspace-list-edit-icon')[0];
    fireEvent.click(editIcon);
    expect(navigateToWorkspaceDetail).toBeCalled();
  });

  it('should be able to call delete modal after clicking delete button', async () => {
    const { getAllByTestId } = render(getWrapWorkspaceListInContext());
    const deleteIcon = getAllByTestId('workspace-list-delete-icon')[0];
    fireEvent.click(deleteIcon);
    expect(screen.queryByLabelText('mock delete workspace modal')).toBeInTheDocument();
    const modalCancelButton = screen.getByLabelText('mock delete workspace modal button');
    fireEvent.click(modalCancelButton);
    expect(screen.queryByLabelText('mock delete workspace modal')).not.toBeInTheDocument();
  });

  it('should be able to pagination when clicking pagination button', async () => {
    const list = [
      { id: 'id1', name: 'name1' },
      { id: 'id2', name: 'name2' },
      { id: 'id3', name: 'name3' },
      { id: 'id4', name: 'name4' },
      { id: 'id5', name: 'name5' },
      { id: 'id6', name: 'name6' },
    ];
    const { getByTestId, getByText, queryByText } = render(getWrapWorkspaceListInContext(list));
    expect(getByText('name1')).toBeInTheDocument();
    expect(queryByText('name6')).not.toBeInTheDocument();
    const paginationButton = getByTestId('pagination-button-next');
    fireEvent.click(paginationButton);
    expect(queryByText('name1')).not.toBeInTheDocument();
    expect(getByText('name6')).toBeInTheDocument();
  });

  it('should display create workspace button for dashboard admin', async () => {
    const { getByText } = render(getWrapWorkspaceListInContext([], true));

    expect(getByText('Create workspace')).toBeInTheDocument();
  });

  it('should hide create workspace button for non dashboard admin', async () => {
    const { queryByText } = render(getWrapWorkspaceListInContext([], false));

    expect(queryByText('Create workspace')).toBeNull();
  });
});
