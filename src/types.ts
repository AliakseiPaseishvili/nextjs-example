import { UseFormRegister } from "react-hook-form";

export type FormType = {
  [key: string]: string | { [key: string]: string }[];
};

export type RegisterField = UseFormRegister<FormType>;
