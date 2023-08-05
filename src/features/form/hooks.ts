import { useFieldArray, useForm } from "react-hook-form";

export const useComplexForm = () => {
  const { control, register } = useForm();
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
