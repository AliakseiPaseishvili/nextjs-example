import React, { ReactNode, ElementType } from "react";
import { DEFAULT_COMPONENT } from "./constants";

type TypographyProps = {
  component?: ElementType;
  children?: ReactNode;
};

const CLASS_NAMES_BY_COMPONENT: { [key: string]: string } = {
  h1: "text-3xl font-bold tracking-tight text-white-900 sm:text-4xl"
};

export const Typography: React.FC<TypographyProps> = ({
  children,
  component = DEFAULT_COMPONENT,
}) => {
  const Component = component;
  const className = CLASS_NAMES_BY_COMPONENT[component.toString()];

  return <Component className={className}>{children}</Component>;
};
