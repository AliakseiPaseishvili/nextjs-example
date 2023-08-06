import { useFieldArray, useForm } from "react-hook-form";
import { FIELD_NAMES } from "./constants";
import { FormType } from "@/types";

export const useComplexForm = () => {
  const { control, register } = useForm<FormType>({
    defaultValues: {
      embeddings: [
        {
          [FIELD_NAMES.EMBEDDING_FIELD_NAME]: "",
          [FIELD_NAMES.EMBEDDING_SPEC]: "",
        },
        {
          [FIELD_NAMES.EMBEDDING_FIELD_NAME]: "",
          [FIELD_NAMES.EMBEDDING_SPEC]: "",
        },
      ],
    },
  });
  const { fields: embeddingsFields, append: appendEmbeddingField } =
    useFieldArray({
      control,
      name: "embeddings",
    });
  const { fields: contentFields, append: appendContentField } = useFieldArray({
    control,
    name: "contentFields",
  });

  return {
    register,
    embeddingsFields,
    appendEmbeddingField,
    contentFields,
    appendContentField,
  };
};
