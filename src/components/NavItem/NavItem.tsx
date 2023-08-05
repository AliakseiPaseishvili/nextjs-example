import React, { FC } from "react";

export type NavItemProps = {
  href: string;
  name: string;
};

export const NavItem: FC<NavItemProps> = ({ href, name }) => (
  <a
    href={href}
    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-neutral-400"
  >
    {name}
  </a>
);
