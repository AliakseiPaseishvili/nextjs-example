import { RegisterField } from "@/types";
import React, { FC } from "react";

type SelectProps = {
  type?: "block" | "inline" | "flex" | "flex-1";
  label?: string;
  name: string;
  register: RegisterField;
  options?: string[];
};

export const Select: FC<SelectProps> = ({
  name,
  label,
  type = "block",
  register,
  options = [],
}) => (
  <div className={`${type} flex-row mt-4 items-center`}>
    <label
      htmlFor={name}
      className="block basis-1/4 text-sm font-semibold leading-6 text-white"
    >
      {label}
    </label>
    <select
      id={name}
      {...register(name)}
      autoComplete="country-name"
      className="block basis-3/4 w-full rounded-md border-0 px-3.5 py-2.5 text-gray-900 shadow-sm ring-gray-300 focus:ring-1 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6 sm:max-w-xs"
    >
      {options.map((value) => (
        <option key={value}>{value}</option>
      ))}
    </select>
  </div>
);
