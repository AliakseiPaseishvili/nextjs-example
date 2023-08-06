'use client'
import React, { ReactNode, FC } from "react";
import { useQestionsSearch } from "../hooks";
import { QuestionsContext } from "./Context";

export const QuestionsProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { questions, addQuestion } = useQestionsSearch();

  return (
    <QuestionsContext.Provider value={{ questions, addQuestion }}>
      {children}
    </QuestionsContext.Provider>
  );
};
