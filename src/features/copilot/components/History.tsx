import React, { FC } from "react";
import { Typography } from "@/components/Typography";

import { Question } from "../types";
import { Button } from "@/components/Button";
import { BlockHeader } from "./BlockHeader";

type HistoryProps = {
  data: Question[];
};

export const History: FC<HistoryProps> = ({ data = [] }) => (
  <div className="flex flex-col basis-1/4 p-4 rounded-md border bg-gray-900 border-gray-700">
    <BlockHeader title="Chat History" />
    <ul>
      {data.map(({ question }) => {
        return (
          <li key={question}>
            <Button className="mb-4 sm:w-full text-ellipsis overflow-hidden">{question}</Button>
          </li>
        );
      })}
    </ul>
  </div>
);
