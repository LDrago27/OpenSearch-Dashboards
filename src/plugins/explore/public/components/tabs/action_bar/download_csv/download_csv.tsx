/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { EuiButtonEmpty, EuiPopover } from '@elastic/eui';
import { FormattedMessage } from '@osd/i18n/react';
import { DiscoverDownloadCsvPopoverContent } from './download_csv_popover_content';
import { useDiscoverDownloadCsv } from './use_download_csv';
import { DownloadCsvFormId } from './constants';
import { OpenSearchSearchHit } from '../../../../types/doc_views_types';
import { IndexPattern } from '../../../../../../data/common';
import { useDiscoverDownloadCsvToasts } from './use_download_csv_toasts';

export interface DiscoverDownloadCsvProps {
  hits?: number;
  rows: OpenSearchSearchHit[];
  indexPattern: IndexPattern;
}

export const DiscoverDownloadCsv = ({ indexPattern, hits, rows }: DiscoverDownloadCsvProps) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const { onSuccess, onError, onLoading } = useDiscoverDownloadCsvToasts();
  const { isLoading, downloadCsvForOption } = useDiscoverDownloadCsv({
    rows,
    hits,
    indexPattern,
    onSuccess,
    onError,
    onLoading,
  });

  const openPopover = () => setIsPopoverOpen(true);
  const closePopover = () => setIsPopoverOpen(false);

  const handleDownloadCsvForOption = async (option: DownloadCsvFormId) => {
    closePopover();
    await downloadCsvForOption(option);
  };

  // Disable trap foucus, since it can break dismiss
  return (
    <EuiPopover
      button={
        <EuiButtonEmpty
          size="s"
          data-test-subj="dscDownloadCsvButton"
          disabled={isLoading}
          iconType="arrowDown"
          iconSide="right"
          onClick={openPopover}
        >
          <FormattedMessage id="explore.discover.downloadCsvButtonText" defaultMessage="Export" />
        </EuiButtonEmpty>
      }
      isOpen={isPopoverOpen}
      closePopover={closePopover}
      panelPaddingSize="none"
      ownFocus={false}
    >
      <DiscoverDownloadCsvPopoverContent
        rowsCount={rows?.length || 0}
        hitsCount={hits || 0}
        downloadForOption={handleDownloadCsvForOption}
      />
    </EuiPopover>
  );
};
