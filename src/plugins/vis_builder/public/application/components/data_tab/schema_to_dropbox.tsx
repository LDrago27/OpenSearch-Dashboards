/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState } from 'react';
import { EuiDragDropContext } from '@elastic/eui';
import { Schemas } from '../../../../../vis_default_editor/public';
import { Dropbox } from './dropbox';
import { Title } from './title';
import { useAggs } from '../../utils/use';
import {
  reorderAgg,
  updateAggConfigParams,
} from '../../utils/state_management/visualization_slice';
import { useTypedDispatch } from '../../utils/state_management';

export const MapSchemaToAggPanel = (schemas: Schemas) => {
  const aggProps = useAggs();
  const dropBoxFields = new Map();
  const dispatch = useTypedDispatch();

  schemas.all.map((schema) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    dropBoxFields.set(schema.name, useState([]));
  });

  const handleDragEnd = ({ source, destination, combine }) => {
    try {
      const [sourceAggFields] = dropBoxFields.get(source?.droppableId);
      const [destinationAggFields] = dropBoxFields?.get(
        destination?.droppableId || combine?.droppableId
      );
      const sourceAggId = sourceAggFields[source?.index]?.id;
      const destinationAggId = destinationAggFields[destination?.index]?.id || combine?.draggableId;

      if (!combine) {
        if (source?.droppableId === destination?.droppableId && source !== null) {
          if (source.index === destination.index) {
            // Moving the same element
            return;
          } else {
            // Reordering of the selections within a same group
            dispatch(
              reorderAgg({
                sourceId: sourceAggId,
                destinationId: destinationAggId,
              })
            );
          }
        } else if (
          source?.droppableId !== destination?.droppableId &&
          source !== null &&
          destination !== null
        ) {
          // Moving a element from one Dropaable Box to another

          const destinationSchema = schemas.all.find(
            (schema) => schema.name === destination.droppableId
          );
          const destinationLimit = destinationSchema?.max;

          if (destinationLimit && 1 + destinationAggFields.length <= destinationLimit) {
            // Case 1: Destination has space
            // We Need to update only sourceAggId 's schema to the desitnation schema
            const newAggConfig = aggProps.aggConfigs?.aggs.map((agg) => {
              if (agg.id === sourceAggId) {
                agg.schema = destinationSchema.name;
              }
              return agg;
            });

            if (newAggConfig) {
              dispatch(updateAggConfigParams(newAggConfig.map((agg) => agg.serialize())));
            }
          } else {
            // Case 2 : Destination has no space
            return;
          }
        }
      } else if (combine !== null) {
        // Combining Elements
        // TODO: Do we need to restrict drag and drop features amongst the Dragables in one Droppables

        // Removing the destination Draggable and updating the schema for the source Aggs
        const filteredAggs = aggProps.aggConfigs?.aggs.filter((agg) => agg.id !== destinationAggId);

        // Updating the source schema to the destination schema
        const updatedAggs = filteredAggs?.map((agg) => {
          if (agg.id === sourceAggId) {
            agg.schema = combine.droppableId;
          }
          return agg;
        });

        if (updatedAggs) {
          dispatch(updateAggConfigParams(updatedAggs.map((agg) => agg.serialize())));
        }
      }
    } catch (err) {
      return;
    }
  };

  const panelComponents = schemas.all.map((schema) => {
    return (
      <Dropbox
        key={schema.name}
        id={schema.name}
        label={schema.title}
        schema={schema}
        aggProps={aggProps}
        displayFieldProps={dropBoxFields.get(schema.name)}
      />
    );
  });

  return (
    <>
      <Title title="Configuration" />
      <EuiDragDropContext onDragEnd={handleDragEnd}>
        <div className="vbConfig__content">{panelComponents}</div>
      </EuiDragDropContext>
    </>
  );
};
