import React, { FC } from "react";
import { FieldValues, RegisterOptions, UseFormRegisterReturn } from "react-hook-form";

type InputProps = {
  name: string;
  label?: string;
  type?: 'block' | 'inline' | 'flex';
  register: (name: string, options?: RegisterOptions<FieldValues, string> | undefined) => UseFormRegisterReturn<string>,
  validationSchema?: {
    required: boolean;
  },
};

export const Input: FC<InputProps> = ({ name, label, type = "block", register, validationSchema }) => {
  return (
    <div className={`${type} flex-row mt-4 items-center`}>
      <label
        htmlFor={name}
        className='block basis-1/4 text-sm font-semibold leading-6 text-white'
      >
        {label}
      </label>
      <input
        id={name}
        type="text"
        className="block basis-3/4 w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
        {...register(name, validationSchema)}
      />
    </div>
  );
};
