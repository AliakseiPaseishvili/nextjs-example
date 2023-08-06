import React from "react";

type SelectProps = {
  type?: "block" | "inline" | "flex" | "flex-1";
  basis?: "basis-full" | "basis-1/4" | "basis-1/3" | 'basis-5/12';
  label?: string;
  name: string;
  options?: string[];
  placeholder?: string;
  grow?: "grow" | "grow-0";
};

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      name,
      label,
      type = "block",
      options = [],
      placeholder,
      basis = "basis-full",
      grow = "grow",
      ...props
    },
    ref
  ) => {
    const selectProps = placeholder ? { defaultValue: placeholder } : {};

    return (
      <div className={`${type} ${basis} ${grow} flex-row items-center`}>
        <label
          htmlFor={name}
          className="block basis-1/4 text-sm font-semibold leading-6 text-white"
        >
          {label}
        </label>
        <select
          id={name}
          ref={ref}
          name={name}
          className="block basis-3/4 w-full bg-gray-800 rounded-md border-0 px-3.5 py-2.5 text-white shadow-sm ring-gray-300 focus:ring-1 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6 sm:max-w-xs"
          {...selectProps}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((value) => (
            <option key={value} value="value">
              {value}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

Select.displayName = "Select";
