import React, { FC } from "react";
import { Input } from "@/components/Input";
import { FIELD_NAMES } from "../constants";
import { RegisterField } from "@/types";
import { SelectAndInput } from "./SelectAndInput";

type ContentFieldsProps = {
  register: RegisterField;
  contentFields: Record<"id", string>[];
  append: () => void;
};

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
      {contentFields.map((item, index) => (
        <SelectAndInput
          key={item.id}
          register={register}
          append={append}
          isLast={index === contentFields.length - 1}
          selectName={
            `contentFields.${index}.${FIELD_NAMES.CONTENT_FIELD_SELECT}` as const
          }
          inputName={
            `contentFields.${index}.${FIELD_NAMES.CONTENT_FIELD}` as const
          }
          {...(!index && {
            selectLabel: "Content Field",
            inputLabel: "Content Field Name",
          })}
        />
      ))}
    </>
  );
};
