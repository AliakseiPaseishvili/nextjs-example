import React from 'react';
import { useDragStart } from '../hooks';
import { FlowNode } from './FlowNode';
import { FLOW_TYPES } from '../types';

export const RightSideBar = () => {
  const onDragStart = useDragStart();

  return (
    <aside className="p-4 w-64 h-full border-r border-b border-gray-700 bg-gray-900 rounded-br-md">
      <FlowNode onDragStart={(event) => onDragStart(event, FLOW_TYPES.INPUT)} type={FLOW_TYPES.INPUT} />
      <FlowNode onDragStart={(event) => onDragStart(event, FLOW_TYPES.DEFAULT)} type={FLOW_TYPES.DEFAULT} />
    </aside>
  );
};
