"use client";
import React from "react";
import { useComplexForm } from "../hooks";
import { Typography } from "@/components/Typography";
import { FormBaseFields } from "./FormBaseFields";
import { EmbeddingsFields } from "./EmbeddingsFields";
import { FIELD_NAMES } from "../constants";
import { ContentFields } from "./ContentFields";
import { BUTTON_TYPES, Button } from "@/components/Button";

export const Form = () => {
  const {
    register,
    embeddingsFields,
    appendEmbeddingField,
    contentFields,
    appendContentField,
  } = useComplexForm();
  return (
    <form>
      <Typography component="h4">
        Process and Register Document Collections from a Processed Folder Dump
      </Typography>
      <FormBaseFields register={register} />
      <EmbeddingsFields
        append={() =>
          appendEmbeddingField({
            [FIELD_NAMES.EMBEDDING_SPEC]: "",
            [FIELD_NAMES.EMBEDDING_FIELD_NAME]: "",
          })
        }
        register={register}
        embeddingsFields={embeddingsFields}
      />
      <ContentFields
        register={register}
        contentFields={contentFields}
        append={() =>
          appendContentField({
            [FIELD_NAMES.CONTENT_FIELD_SELECT]: "",
            [FIELD_NAMES.CONTENT_FIELD]: "",
          })
        }
      />
      <div className="flex direction-row justify-center">
        <Button type={BUTTON_TYPES.BIG}>Create</Button>
      </div>
    </form>
  );
};
