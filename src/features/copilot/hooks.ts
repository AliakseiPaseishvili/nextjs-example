import {
  useReducer,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useForm } from "react-hook-form";
import {
  QuestionsReducer,
  QuestionsAction,
  QuestionActionType,
  Question,
} from "./types";
import { CHAT_FIELDS, DEFAULT_ANSWER } from "./constants";
import { DomainContext, QuestionsContext } from "./context/Context";

export const useChatForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const { addQuestion, index, questions } = useContext(QuestionsContext);
  const { domain } = useContext(DomainContext);
  
  const onSubmit = useCallback(
    () =>
      handleSubmit((data) => {
        const { question, context } = data;
        addQuestion({ question, context, domain });
      })(),
    [handleSubmit, addQuestion, domain]
  );

  useEffect(() => {
    if (typeof index === "number" && questions[index]) {
      const { question, context } = questions[index];
      reset({
        [CHAT_FIELDS.QUESTION]: question || "",
        [CHAT_FIELDS.CONTEXT]: context || "",
      });
    }
  }, [index]);

  return { register, onSubmit };
};

const questionsReducer = (state: QuestionsReducer, action: QuestionsAction) => {
  if (action.type === QuestionActionType.ADD_QUESTION_ACTION) {
    return {
      questions: [...state.questions, action.payload],
      index: state.questions.length,
    };
  } else if (action.type === QuestionActionType.SELECT_QUESTION) {
    return {
      ...state,
      ...action.payload,
    };
  }

  return state;
};

export const useQestionsSearch = () => {
  const [state, dispatch] = useReducer(questionsReducer, {
    questions: [],
    index: null,
  });
  const { questions, index } = state;
  const addQuestion = useCallback(
    ({ question, context, domain }: Omit<Question, "answer">) =>
      dispatch({
        type: QuestionActionType.ADD_QUESTION_ACTION,
        payload: { question, context, answer: DEFAULT_ANSWER, domain },
      }),
    [dispatch]
  );
  const selectQuestion = useCallback(
    (index: number | null) =>
      dispatch({
        type: QuestionActionType.SELECT_QUESTION,
        payload: { index },
      }),
    [dispatch]
  );

  return { questions, index, addQuestion, selectQuestion };
};

export const useDomain = () => {
  const [domain, setDomain] = useState<string | null>(null);

  const setDomainCallback = useCallback((domain: string | null) => {
    setDomain(domain)
  }, [setDomain])

  return { domain, setDomain: setDomainCallback };
};
