import { useForm } from "react-hook-form";

export const useChatForm = () => {
  const { register } = useForm();

  return { register };
};
