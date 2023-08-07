import React from "react";
import { BlockHeader } from "./BlockHeader";
import { Button } from "@/components/Button";

const COLLECTIONS = ["Disease collection", "Lab codes"];

export const Collections = () => {
  return (
    <div className="flex flex-col basis-1/4 p-4 rounded-md border bg-gray-900 border-gray-700 max-w-xs">
      <BlockHeader title="Collections" />
      <ul>
        {COLLECTIONS.map((title) => (
          <li key={title}>
            <Button className="mb-4 sm:w-full">{title}</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
