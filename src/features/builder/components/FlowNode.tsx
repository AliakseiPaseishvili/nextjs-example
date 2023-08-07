import React, {FC } from "react";
import { FLOW_TYPES } from "../types";
import { FLOW_TYPES_DATA } from "../constants";

type FlowNodeProps = {
  type?: FLOW_TYPES;
  onDragStart: (event: React.DragEvent<HTMLParagraphElement>) => void;
}

export const FlowNode: FC<FlowNodeProps> = ({ onDragStart, type = FLOW_TYPES.INPUT }) => {
  const { label, backgroundColorTailwind } = FLOW_TYPES_DATA[type];
  return (
    <p
      className={`w-full p-3 border rounded ${backgroundColorTailwind} text-white flex justify-center mb-4`}
      onDragStart={onDragStart}
      draggable
    >
      {label}
    </p>
  );
};
