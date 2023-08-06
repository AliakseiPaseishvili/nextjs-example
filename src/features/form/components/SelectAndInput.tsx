import React, { FC } from "react";
import { Select } from "@/components/Select";
import { Input } from "@/components/Input";
import { RegisterField } from "@/types";

type SelectAndInputProps = {
  register: RegisterField;
  selectName: string;
  inputName: string;
  selectLabel?: string;
  inputLabel?: string;
};

export const SelectAndInput: FC<SelectAndInputProps> = ({
  register,
  selectName,
  inputName,
  selectLabel,
  inputLabel,
}) => {
  return (
    <div className="flex direction-row gap-2 justify-between">
      <Select
        type="flex-1"
        {...register(selectName)}
        label={selectLabel}
      />
      <Input
        type="flex-1"
        {...register(inputName)}
        label={inputLabel}
      />
    </div>
  );
};
