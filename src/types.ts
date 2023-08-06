import { UseFormRegister } from "react-hook-form";

export type FormType = {
  [key: string]: string | { [key: string]: string }[];
  embeddings: {
    embeddingFieldName: string;
    embeddingSpec: string;
  }[];
  contentFields: {
    contentField: string;
    contentFieldSelect: string;
  }[];
};

export type RegisterField = UseFormRegister<FormType>;
