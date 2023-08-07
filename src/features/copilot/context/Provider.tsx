"use client";
import React, { FC } from "react";
import { useDomain, useQestionsSearch } from "../hooks";
import { DomainContext, QuestionsContext } from "./Context";
import { ReactChildren } from "@/types";

export const QuestionsProvider: FC<ReactChildren> = ({ children }) => {
  const { questions, index, addQuestion, selectQuestion } = useQestionsSearch();

  return (
    <QuestionsContext.Provider
      value={{ questions, addQuestion, index, selectQuestion }}
    >
      {children}
    </QuestionsContext.Provider>
  );
};

export const DomainProvider: FC<ReactChildren> = ({ children }) => {
  const { domain, setDomain } = useDomain();
  return (
    <DomainContext.Provider value={{ domain, setDomain }}>
      {children}
    </DomainContext.Provider>
  );
};
