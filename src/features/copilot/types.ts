export interface Question {
  question: string;
  context: string;
  answer: string;
}

export type QuestionsReducer = {
  questions: Question[];
};

export enum QuestionActionType {
  ADD_QUESTION_ACTION = "ADD_QUESTION",
}

export interface QuestionsAction {
  type: QuestionActionType;
  payload: Question;
}
