import React from "react";

type InputProps = {
  name: string;
  label?: string;
  type?: "block" | "inline" | "flex" | "flex-1";
  marginTop?: "mt-4" | "mt-0";
  marginBottom?: "mb-4" | "mt-0";
  basis?: "basis-full" | "basis-1/4" | "basis-1/3" | "basis-5/12";
  grow?: "grow" | "grow-0";
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "block",
      name,
      label,
      marginTop = "mt-0",
      basis = "basis-full",
      grow = "grow",
      marginBottom = "mb-0",
      ...props
    },
    ref
  ) => (
    <div
      className={`${type} ${marginTop} ${basis} ${grow} ${marginBottom} flex-row items-center`}
    >
      <label
        htmlFor={name}
        className="block basis-1/4 text-sm font-semibold leading-6 text-white"
      >
        {label}
      </label>
      <input
        ref={ref}
        id={name}
        type="text"
        className="block basis-3/4 w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
        {...props}
      />
    </div>
  )
);

Input.displayName = "Input";
