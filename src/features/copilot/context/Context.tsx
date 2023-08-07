"use client";
import { createContext } from "react";
import { Question } from "../types";

export interface QuestionsContextType {
  addQuestion: ({ question, context, domain }: Omit<Question, "answer">) => void;
  questions: Question[];
  index: number | null;
  selectQuestion: (index: number | null) => void;
}

export const QuestionsContext = createContext<QuestionsContextType>({
  addQuestion: () => {},
  questions: [],
  index: null,
  selectQuestion: () => {},
});

export interface DomainContextType {
  domain?: string | null;
  setDomain: (domain: string | null) => void; 
};

export const DomainContext = createContext<DomainContextType>({
  domain: null,
  setDomain: () => {},
});
