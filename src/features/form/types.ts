import { FieldValues } from "react-hook-form";

export interface SelectAndInput extends FieldValues {
  embeddingFieldName: string;
  embeddingSpec: string;
};
