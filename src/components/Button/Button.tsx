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
    "mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-200 sm:mt-0 sm:w-auto cursor-pointer",
  [BUTTON_TYPES.BIG]:
    "mt-3 inline-flex w-full justify-center rounded-md bg-sky-600 px-3 py-2 text-m font-semibold text-white shadow-sm ring-1 ring-inset ring-sky-500 hover:bg-sky-700 hover:ring-sky-700 sm:mt-0 sm:w-auto cursor-pointer",
};

const SELECTED_CLASS_NAMES = {
  [BUTTON_TYPES.PRIMARY]: "bg-neutral-900 text-white hover:bg-neutral-950 ring-gray-700 hover:ring-gray-700",
  [BUTTON_TYPES.BIG]: '',
};

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  className = '',
  type = BUTTON_TYPES.PRIMARY,
  selected = false,
}) => {
  const buttonClassName = [CLASS_NAMES[type] || '', className, selected && SELECTED_CLASS_NAMES[type] || ''].join(' ');

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
