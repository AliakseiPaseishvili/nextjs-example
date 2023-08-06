"use client";
import { createContext } from "react";
import { Question } from "../types";

export interface QuestionsContextType {
  addQuestion: ({ question, context }: Omit<Question, "answer">) => void;
  questions: Question[];
}

export const QuestionsContext = createContext<QuestionsContextType>({
  addQuestion: () => {},
  questions: [],
});
