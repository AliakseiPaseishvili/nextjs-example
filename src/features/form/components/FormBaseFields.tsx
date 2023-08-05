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
      register={register}
      name={FIELD_NAMES.CHUNK_DIRECTORY}
      label="Select File Directory to Chunk"
    />
    <Input
      register={register}
      name={FIELD_NAMES.GENERATED_ID}
      validationSchema={{ required: true }}
      type="flex"
      label="Generated ID"
    />
    <Input
      register={register}
      name={FIELD_NAMES.COLLECTION_NAME}
      type="flex"
      label="Collection Name"
    />
    <Input
      register={register}
      name={FIELD_NAMES.COLLECTION_TAGS}
      type="flex"
      label="Collection Tags"
    />
  </>
);
