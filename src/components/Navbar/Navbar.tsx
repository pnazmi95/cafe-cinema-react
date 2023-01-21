import React from "react";
import User from "./User";
import DarkMode from "./DarkMode";
import NavItem from "./NavItem";

function Navbar(): JSX.Element {
  return (
    <nav className="flex items-center justify-center bg-light-secondary h-16 dark:bg-dark-secondary sticky top-0">
      <div className="flex w-full max-w-7xl items-center justify-between">
        <ul className="flex items-center justify-between gap-4">
          <NavItem title= "home"/>
          <NavItem title= "movies"/>
          <NavItem title= "series"/>
          <NavItem title= "contact"/>
          <NavItem title= "about"/>
        </ul>
        <div className="flex items-center justify-center gap-2">
          <a href="">Search</a>
          <User />
          <DarkMode />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
