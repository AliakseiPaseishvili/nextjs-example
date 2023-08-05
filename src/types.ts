import {
  FieldValues,
  RegisterOptions,
  UseFormRegisterReturn,
} from "react-hook-form";

export type RegisterField = (
  name: string,
  options?: RegisterOptions<FieldValues, string> | undefined
) => UseFormRegisterReturn<string>;
