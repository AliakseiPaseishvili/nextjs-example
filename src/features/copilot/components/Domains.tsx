"use client";
import React, { useContext } from "react";
import { BlockHeader } from "./BlockHeader";
import { Button } from "@/components/Button";
import { DomainContext } from "../context/Context";

const DOMAINS = ["Prostate Cancer", "Multiple Myeloma", "High Blood Pressure"];

export const Domains = () => {
  const { domain, setDomain } = useContext(DomainContext);
  return (
    <div className="flex flex-col basis-1/4 p-4 rounded-md border bg-gray-900 border-gray-700 max-w-xs">
      <BlockHeader title="Domains" />
      <ul>
        {DOMAINS.map((title) => (
          <li key={title}>
            <Button
              className="mb-4 sm:w-full"
              selected={domain === title}
              onClick={() => setDomain(title)}
            >
              {title}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
