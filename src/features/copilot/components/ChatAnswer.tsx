import React, { useContext } from "react";
import { QuestionsContext } from "../context/Context";
import { Answer } from "./Answer";

export const ChatAnswer = () => {
  const { questions, index } = useContext(QuestionsContext);

  const answer = typeof index === "number" && questions[index].answer;

  return <Answer answer={answer} />;
};
