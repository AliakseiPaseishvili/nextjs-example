import React, { FC } from "react";
import { Input } from "@/components/Input";
import { FIELD_NAMES } from "../constants";
import { RegisterField } from "@/types";

type FormBaseFieldsProps = {
  register: RegisterField;
};

export const FormBaseFields: FC<FormBaseFieldsProps> = ({ register }) => (
  <>
    <Input
      {...register(FIELD_NAMES.CHUNK_DIRECTORY)}
      label="Select File Directory to Chunk"
      marginTop='mt-4'
    />
    <Input
      {...(register(FIELD_NAMES.GENERATED_ID), { required: true })}
      type="flex"
      name={FIELD_NAMES.GENERATED_ID}
      label="Generated ID"
      marginTop='mt-4'
    />
    <Input
      {...register(FIELD_NAMES.COLLECTION_NAME)}
      type="flex"
      label="Collection Name"
      marginTop='mt-4'
    />
    <Input
      {...register(FIELD_NAMES.COLLECTION_TAGS)}
      type="flex"
      label="Collection Tags"
      marginTop='mt-4'
    />
  </>
);
