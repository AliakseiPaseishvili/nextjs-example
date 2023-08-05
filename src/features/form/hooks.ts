import { useFieldArray, useForm } from "react-hook-form";
import { FIELD_NAMES } from "./constants";

export const useComplexForm = () => {
  const { control, register } = useForm({
    defaultValues: {
      ['embeddings']: [
        {
          [FIELD_NAMES.EMBEDDING_FIELD_NAME]: "",
          [FIELD_NAMES.EMBEDDING_SPEC]: "",
        },
        {
          [FIELD_NAMES.EMBEDDING_FIELD_NAME]: "",
          [FIELD_NAMES.EMBEDDING_SPEC]: "",
        },
      ],
      ['contentFields']: [{}],
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
