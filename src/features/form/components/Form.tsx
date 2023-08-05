"use client";
import React from "react";
import { useComplexForm } from "../hooks";
import { Typography } from "@/components/Typography";
import { FormBaseFields } from "./FormBaseFields";
import { EmbeddingsFields } from "./EmbeddingsFields";

export const Form = () => {
  const { register, embeddingsFields } = useComplexForm();
  return (
    <div>
      <Typography component="h4">
        Process and Register Document Collections from a Processed Folder Dump
      </Typography>
      <FormBaseFields register={register} />
      <EmbeddingsFields
        register={register}
        embeddingsFields={embeddingsFields}
      />
    </div>
  );
};
