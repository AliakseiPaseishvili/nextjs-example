"use client";
import React, { useContext } from "react";
import { QuestionsContext } from "../context/Context";
import { History } from "./History";

export const ChatHistory = () => {
  const { questions } = useContext(QuestionsContext);

  return <History data={questions} />;
};
