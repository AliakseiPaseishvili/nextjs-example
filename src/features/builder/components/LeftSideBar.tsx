import React from "react";
import { useDragStart } from "../hooks";
import { FlowNode } from "./FlowNode";
import { FLOW_TYPES } from "../types";

export const LeftSideBar = () => {
  const onDragStart = useDragStart();

  return (
    <aside className="p-4 w-64 h-full border-l border-b border-gray-700 bg-gray-900 rounded-bl-md">
      <FlowNode onDragStart={(event) => onDragStart(event, FLOW_TYPES.OUTPUT)} type={FLOW_TYPES.OUTPUT} />
    </aside>
  );
};
