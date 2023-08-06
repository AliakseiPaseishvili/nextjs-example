import React, { FC } from "react";
import { Typography } from "@/components/Typography";
import { RegisterField } from "@/types";
import { FIELD_NAMES } from "../constants";
import { SelectAndInput } from "./SelectAndInput";
import { FieldsHeader } from "./FieldsHeader";

type EmbeddingsFieldsProps = {
  register: RegisterField;
  embeddingsFields: Record<"id", string>[];
  append: () => void;
};

const HEADER_LABELS = ['Embedding Spec', 'Embedding Field Name'];

export const EmbeddingsFields: FC<EmbeddingsFieldsProps> = ({
  register,
  embeddingsFields,
  append,
}) => {
  return (
    <fieldset className="rounded-md border border-gray-400 p-4 mt-4">
      <Typography component="legend">
        Create Embeddings for all Documents
      </Typography>
      <SelectAndInput
        register={register}
        selectName={FIELD_NAMES.CHUNKING_SPEC}
        selectLabel="Chunking Spec"
        inputName={FIELD_NAMES.CHUNKING_FIELD_NAME}
        inputLabel="Chunking Field name"
        placeholderLabel="Select Chunking Spec"
      />
      <FieldsHeader labels={HEADER_LABELS} />
      {embeddingsFields.map((item, index) => (
        <SelectAndInput
          append={append}
          isDefault={index <= 1}
          isLast={index === embeddingsFields.length - 1}
          key={item.id}
          register={register}
          placeholderLabel="Select Embedding Spec"
          selectName={
            `embeddings.${index}.${FIELD_NAMES.EMBEDDING_SPEC}` as const
          }
          inputName={
            `embeddings.${index}.${FIELD_NAMES.EMBEDDING_FIELD_NAME}` as const
          }
        />
      ))}
    </fieldset>
  );
};
