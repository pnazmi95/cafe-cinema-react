import React from "react";
import User from "./User";
import DarkMode from "./DarkMode";
import NavItem from "./NavItem";
import Search from "./Search";
import Cart from "./Cart";

function Navbar(): JSX.Element {
  return (
    <nav className="sticky top-0 z-50 flex h-16 items-center justify-center bg-light-secondary dark:bg-dark-secondary">
      <div className=" flex w-full max-w-7xl items-center justify-between px-4">
        <ul className="flex items-center justify-evenly gap-4">
          <NavItem title="home" />
          <NavItem title="movies" />
          <NavItem title="series" />
          <NavItem title="contact" />
          <NavItem title="about" />
        </ul>
        <div className="flex items-center justify-evenly gap-10">
          <Search />
          <Cart />
          <User />
          <DarkMode />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
