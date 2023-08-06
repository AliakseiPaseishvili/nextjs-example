import { useReducer, useCallback, useContext } from "react";
import { useForm } from "react-hook-form";
import {
  QuestionsReducer,
  QuestionsAction,
  QuestionActionType,
  Question,
} from "./types";
import { DEFAULT_ANSWER } from "./constants";
import { QuestionsContext } from "./context/Context";

export const useChatForm = () => {
  const { register, handleSubmit } = useForm();
  const { addQuestion } = useContext(QuestionsContext);

  const onSubmit = useCallback(
    () =>
      handleSubmit((data) => {
        const { question, context } = data;
        addQuestion({ question, context });
      })(),
    [handleSubmit, addQuestion]
  );

  return { register, onSubmit };
};

const questionsReducer = (state: QuestionsReducer, action: QuestionsAction) => {
  if (action.type === QuestionActionType.ADD_QUESTION_ACTION) {
    return { questions: [...state.questions, action.payload] };
  }

  return state;
};

export const useQestionsSearch = () => {
  const [state, dispatch] = useReducer(questionsReducer, { questions: [] });
  const { questions } = state;
  const addQuestion = useCallback(
    ({ question, context }: Omit<Question, "answer">) =>
      dispatch({
        type: QuestionActionType.ADD_QUESTION_ACTION,
        payload: { question, context, answer: DEFAULT_ANSWER },
      }),
    [dispatch]
  );

  return { questions, addQuestion };
};
