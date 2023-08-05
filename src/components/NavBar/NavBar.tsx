import React, { FC } from "react";
import { NavItem, NavItemProps } from "../NavItem";

type NavBarProps = {
  navigation?: NavItemProps[];
};

export const NavBar: FC<NavBarProps> = ({ navigation = [] }) => (
  <header className="absolute inset-x-0 top-0 z-50">
    <nav
      className="flex items-center justify-center p-6 lg:px-8"
      aria-label="Global"
    >
      <div className="hidden lg:flex lg:gap-x-12">
        {navigation.map(({ name, href }) => (
          <NavItem name={name} href={href} key={name} />
        ))}
      </div>
    </nav>
  </header>
);
