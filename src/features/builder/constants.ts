import { FLOW_TYPES } from "./types";

export const FLOW_TYPES_DATA = {
  [FLOW_TYPES.INPUT]: {
    label: "Prompt Input",
    backgroundColorTailwind: "bg-cyan-800",
    backgroundColor: "rgb(21,94,117)",
  },
  [FLOW_TYPES.DEFAULT]: {
    label: "Similarity Search",
    backgroundColorTailwind: "bg-indigo-800",
    backgroundColor: "rgb(55,48,163)",
  },
  [FLOW_TYPES.OUTPUT]: {
    label: "Output",
    backgroundColorTailwind: "bg-amber-600",
    backgroundColor: "rgb(217,119,6)",
  },
};
