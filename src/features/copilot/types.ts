export interface Question {
  question?: string;
  context?: string;
  answer?: string;
  index?: number | null;
  domain?: string | null;
}

export type QuestionsReducer = {
  questions: Question[];
  index: number | null;
};

export enum QuestionActionType {
  ADD_QUESTION_ACTION = "ADD_QUESTION",
  SELECT_QUESTION = 'SELECT_QUESTION',
}

export interface QuestionsAction {
  type: QuestionActionType;
  payload: Question;
}
