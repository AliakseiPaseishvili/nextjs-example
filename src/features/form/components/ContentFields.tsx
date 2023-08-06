import React, { FC } from "react";
import { Input } from "@/components/Input";
import { FIELD_NAMES } from "../constants";
import { RegisterField } from "@/types";
import { SelectAndInput } from "./SelectAndInput";
import { FieldsHeader } from "./FieldsHeader";

type ContentFieldsProps = {
  register: RegisterField;
  contentFields: Record<"id", string>[];
  append: () => void;
};

const HEADER_LABELS = ['Content Field', 'Content Field Name'];

export const ContentFields: FC<ContentFieldsProps> = ({
  register,
  contentFields,
  append,
}) => {
  return (
    <>
      <Input
        {...register(FIELD_NAMES.CONTENT_FILE)}
        label="Select Content Files"
        marginTop="mt-4"
        marginBottom="mb-4"
      />
      <FieldsHeader labels={HEADER_LABELS} />
      {contentFields.map((item, index) => (
        <SelectAndInput
          key={item.id}
          register={register}
          append={append}
          placeholderLabel="Select Field Name"
          isLast={index === contentFields.length - 1}
          selectName={
            `contentFields.${index}.${FIELD_NAMES.CONTENT_FIELD_SELECT}` as const
          }
          inputName={
            `contentFields.${index}.${FIELD_NAMES.CONTENT_FIELD}` as const
          }
        />
      ))}
    </>
  );
};
