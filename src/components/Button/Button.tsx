import React, { FC } from "react";

export enum BUTTON_TYPES {
  PRIMARY = "primary",
  BIG = "big",
}

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: BUTTON_TYPES;
  selected?: boolean;
};

const CLASS_NAMES = {
  [BUTTON_TYPES.PRIMARY]:
    "mt-3 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset sm:mt-0 sm:w-auto cursor-pointer",
  [BUTTON_TYPES.BIG]:
    "mt-3 inline-flex w-full justify-center rounded-md px-3 py-2 text-m font-semibold shadow-sm ring-1 ring-inset sm:mt-0 sm:w-auto cursor-pointer",
};

const SELECTED_CLASS_NAMES = {
  [BUTTON_TYPES.PRIMARY]:
    "bg-neutral-900 text-white hover:bg-neutral-950 ring-gray-700 hover:ring-gray-700 hover:text-white",
  [BUTTON_TYPES.BIG]: "",
};

const UNSELECTED_CLASS_NAMES = {
  [BUTTON_TYPES.PRIMARY]:
    "bg-white text-gray-900 hover:bg-neutral-950 ring-gray-300 hover:bg-slate-200 hover:text-gray-900",
  [BUTTON_TYPES.BIG]:
    "bg-sky-600 text-white ring-sky-500 hover:bg-sky-700 hover:ring-sky-700",
};

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  className = "",
  type = BUTTON_TYPES.PRIMARY,
  selected = false,
}) => {
  const buttonClassName = [
    CLASS_NAMES[type] || "",
    selected ? SELECTED_CLASS_NAMES[type] : UNSELECTED_CLASS_NAMES[type],
    className,
  ].join(" ");

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!onClick || disabled}
      className={buttonClassName}
    >
      {children}
    </button>
  );
};
