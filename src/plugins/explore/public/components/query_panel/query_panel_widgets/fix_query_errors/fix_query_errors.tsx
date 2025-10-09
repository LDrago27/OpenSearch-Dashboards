/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { i18n } from '@osd/i18n';
import {
  EuiButtonEmpty,
  EuiIcon,
  EuiText,
  EuiModal,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiModalBody,
  EuiModalFooter,
  EuiButton,
  EuiCodeBlock,
  EuiSpacer,
  EuiLoadingSpinner,
} from '@elastic/eui';
import { selectIsPromptEditorMode } from '../../../../application/utils/state_management/selectors';
import { useOpenSearchDashboards } from '../../../../../../opensearch_dashboards_react/public';
import { ExploreServices } from '../../../../types';
import { useEditorText } from '../../../../application/hooks';
import './fix_query_errors.scss';

interface FixResult {
  fixedQuery: string;
  explanation: string;
  errorType: string;
}

export const FixQueryErrorsButton = () => {
  const { services } = useOpenSearchDashboards<ExploreServices>();
  const isPromptMode = useSelector(selectIsPromptEditorMode);
  const getEditorText = useEditorText();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [fixResult, setFixResult] = useState<FixResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onButtonClick = async () => {
    if (!services.aiDelight) {
      services.notifications.toasts.addWarning('AI Delight service is not available');
      return;
    }

    const currentQuery = getEditorText();
    if (!currentQuery.trim()) {
      services.notifications.toasts.addWarning('Please enter a query first');
      return;
    }

    setIsModalOpen(true);
    setIsLoading(true);
    setError(null);
    setFixResult(null);

    try {
      const response = await services.aiDelight.client.execute({
        delightId: 'fix-query-error',
        context: {
          query: currentQuery,
          error: 'General query analysis and optimization',
        },
      });

      if (response.success && response.result) {
        // Handle different response formats
        let parsedResult: FixResult;

        if (typeof response.result === 'string') {
          // If result is a string, try to parse it as JSON
          try {
            const jsonResult = JSON.parse(response.result);
            parsedResult = {
              fixedQuery: jsonResult.fixedQuery || currentQuery,
              explanation: jsonResult.explanation || response.result,
              errorType: jsonResult.errorType || 'Analysis',
            };
          } catch {
            // If not JSON, treat as explanation with original query
            parsedResult = {
              fixedQuery: currentQuery,
              explanation: response.result,
              errorType: 'Analysis',
            };
          }
        } else if (typeof response.result === 'object' && response.result !== null) {
          // If result is already an object, use it directly with fallbacks
          parsedResult = {
            fixedQuery: response.result.fixedQuery || currentQuery,
            explanation: response.result.explanation || 'No explanation provided',
            errorType: response.result.errorType || 'Analysis',
          };
        } else {
          // Fallback for other types
          parsedResult = {
            fixedQuery: currentQuery,
            explanation: 'No analysis result available',
            errorType: 'Unknown',
          };
        }

        setFixResult(parsedResult);
      } else {
        setError(response.error || 'Failed to analyze query');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFixResult(null);
    setError(null);
  };

  const buttonIsDisabled = isPromptMode;

  return (
    <>
      <EuiButtonEmpty
        onClick={onButtonClick}
        data-test-subj="queryPanelFooterFixQueryErrorsButton"
        size="xs"
        isDisabled={buttonIsDisabled}
      >
        <div className="exploreFixQueryErrors__buttonTextWrapper">
          <EuiIcon type="wrench" size="s" />
          <EuiText size="xs">
            {i18n.translate('explore.queryPanel.fixQueryErrorsButton.fixQueryErrors', {
              defaultMessage: 'Fix Query Errors',
            })}
          </EuiText>
        </div>
      </EuiButtonEmpty>

      {isModalOpen && (
        <EuiModal onClose={closeModal} initialFocus="[name=popswitch]">
          <EuiModalHeader>
            <EuiModalHeaderTitle>
              {i18n.translate('explore.queryPanel.fixQueryErrorsModal.title', {
                defaultMessage: 'Query Analysis Results',
              })}
            </EuiModalHeaderTitle>
          </EuiModalHeader>

          <EuiModalBody>
            {isLoading && (
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <EuiLoadingSpinner size="xl" />
                <EuiSpacer size="m" />
                <EuiText>
                  {i18n.translate('explore.queryPanel.fixQueryErrorsModal.analyzing', {
                    defaultMessage: 'Analyzing your query...',
                  })}
                </EuiText>
              </div>
            )}

            {error && (
              <EuiText color="danger">
                <strong>Error:</strong> {error}
              </EuiText>
            )}

            {fixResult && (
              <>
                <EuiText>
                  <h4>
                    {i18n.translate('explore.queryPanel.fixQueryErrorsModal.fixedQuery', {
                      defaultMessage: 'Suggested Query:',
                    })}
                  </h4>
                </EuiText>
                <EuiSpacer size="s" />
                <EuiCodeBlock language="sql" isCopyable>
                  {fixResult.fixedQuery}
                </EuiCodeBlock>

                <EuiSpacer size="m" />
                <EuiText>
                  <h4>
                    {i18n.translate('explore.queryPanel.fixQueryErrorsModal.explanation', {
                      defaultMessage: 'Explanation:',
                    })}
                  </h4>
                  <p>{fixResult.explanation}</p>
                </EuiText>

                {fixResult.errorType && (
                  <>
                    <EuiSpacer size="s" />
                    <EuiText size="s" color="subdued">
                      <strong>Error Type:</strong> {fixResult.errorType}
                    </EuiText>
                  </>
                )}
              </>
            )}
          </EuiModalBody>

          <EuiModalFooter>
            <EuiButton onClick={closeModal} fill>
              {i18n.translate('explore.queryPanel.fixQueryErrorsModal.close', {
                defaultMessage: 'Close',
              })}
            </EuiButton>
          </EuiModalFooter>
        </EuiModal>
      )}
    </>
  );
};
