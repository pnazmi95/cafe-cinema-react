import React from "react";
import User from "./User";
import DarkMode from "./DarkMode";
import NavItem from "./NavItem";
import Search from "./Search";

function Navbar(): JSX.Element {
  return (
    <nav className="sticky top-0 flex h-16 items-center justify-center bg-light-secondary dark:bg-dark-secondary">
      <div className="flex w-full max-w-7xl items-center justify-between">
        <ul className="flex items-center justify-between gap-4">
          <NavItem title="home" />
          <NavItem title="movies" />
          <NavItem title="series" />
          <NavItem title="contact" />
          <NavItem title="about" />
        </ul>
        <div className="flex items-center justify-center gap-10">
          <Search />
          <User />
          <DarkMode />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
