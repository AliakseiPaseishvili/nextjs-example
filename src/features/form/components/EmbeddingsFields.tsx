import React, { FC } from "react";
import { Input } from "@/components/Input";
import { Typography } from "@/components/Typography";
import { RegisterField } from "@/types";
import { FIELD_NAMES } from "../constants";
import { Select } from "@/components/Select/Select";
import { SelectAndInput } from "./SelectAndInput";

type EmbeddingsFieldsProps = {
  register: RegisterField;
  embeddingsFields: Record<"id", string>[];
};

export const EmbeddingsFields: FC<EmbeddingsFieldsProps> = ({
  register,
  embeddingsFields,
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
      />
      {embeddingsFields.map((item, index) => (
        <SelectAndInput
          key={item.id}
          register={register}
          selectName={`embeddings.${index}.${FIELD_NAMES.EMBEDDING_SPEC}`}
          inputName={`embeddings.${index}.${FIELD_NAMES.EMBEDDING_FIELD_NAME}`}
          {...(!index && {
            selectLabel: "Embedding Spec",
            inputLabel: "Embedding Field Name",
          })}
        />
      ))}
    </fieldset>
  );
};
