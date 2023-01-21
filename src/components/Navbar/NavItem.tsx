import React from "react";
import INavbarProps from "../../interfaces/navbarprops";

function NavItem({ title }: INavbarProps): JSX.Element {
  return (
    <li className="cursor-pointer  text-xl font-bold uppercase text-light-heading hover:text-light-hover dark:text-dark-heading dark:hover:text-dark-hover">
      {title}
    </li>
  );
}

export default NavItem;
