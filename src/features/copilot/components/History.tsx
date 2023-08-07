import React, { FC } from "react";
import { Typography } from "@/components/Typography";

import { Question } from "../types";
import { Button } from "@/components/Button";
import { BlockHeader } from "./BlockHeader";

type HistoryProps = {
  data: Question[];
  selectedIndex?: number | null;
  onSelect?: (index: number | null) => void;
};

export const History: FC<HistoryProps> = ({
  data = [],
  selectedIndex,
  onSelect,
}) => (
  <div className="flex flex-col basis-1/4 p-4 max-w-xs rounded-md border bg-gray-900 border-gray-700">
    <BlockHeader title="Chat History" />
    <ul>
      {data.map(({ question, domain }, index) => {
        return (
          <li key={domain ? `${domain}${question}` : question}>
            <Button
              className="mb-4 sm:w-full"
              selected={index === selectedIndex}
              onClick={() => onSelect?.(index)}
            >
              <Typography
                component="p"
                className="text-ellipsis overflow-hidden whitespace-nowrap max-w-max"
              >
                {domain ? `${domain}: ${question}` : question}
              </Typography>
            </Button>
          </li>
        );
      })}
    </ul>
  </div>
);
