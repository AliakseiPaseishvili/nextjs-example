import React, { FC } from "react";
import { Select } from "@/components/Select";
import { Input } from "@/components/Input";
import { RegisterField } from "@/types";
import { Typography } from "@/components/Typography";
import { Button } from "@/components/Button";
import { PlusIcon } from "@heroicons/react/24/solid";

type SelectAndInputProps = {
  register: RegisterField;
  selectName: string;
  inputName: string;
  selectLabel?: string;
  inputLabel?: string;
  isDefault?: boolean;
  isLast?: boolean;
  placeholderLabel?: string;
  append?: () => void;
};

export const SelectAndInput: FC<SelectAndInputProps> = ({
  register,
  selectName,
  inputName,
  selectLabel,
  inputLabel,
  isDefault,
  isLast,
  placeholderLabel,
  append,
}) => {
  return (
    <div className="flex direction-row gap-2 mb-4 justify-start items-center">
      <Select
        type="flex-1"
        grow="grow-0"
        placeholder={placeholderLabel}
        basis="basis-1/3"
        options={["first", "second"]}
        label={selectLabel}
        {...register(selectName)}
      />
      <Input
        type="flex-1"
        basis="basis-1/3"
        grow="grow-0"
        label={inputLabel}
        {...register(inputName)}
      />
      {isDefault && <Typography>Default</Typography>}
      {isLast && (
        <Button onClick={append}>
          <PlusIcon className="h-6 w-6 text-black" />
        </Button>
      )}
    </div>
  );
};
