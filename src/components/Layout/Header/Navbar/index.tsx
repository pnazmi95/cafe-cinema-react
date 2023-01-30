import UserIcon from "./UserIcon";
import DarkModeToggle from "./DarkModeToggle";
import NavItem from "./NavItem";
import SearchIcon from "./SearchIcon";
import CartIcon from "./CartIcon";
import Hamburger from "./Hamburger";

interface INavbarProps extends React.PropsWithChildren {}
const Navbar: React.FunctionComponent<INavbarProps> = (): JSX.Element => {
  return (
    <nav className="sticky top-0 z-50 flex h-16 items-center justify-center bg-light-secondary dark:bg-dark-secondary">
      <div className=" flex w-full max-w-7xl items-center justify-between px-4">
        <Hamburger />
        <ul className="hidden items-center justify-evenly gap-4 md:flex">
          <NavItem title="home" url="/"/>
          <NavItem title="movies" url="/movies"/>
          <NavItem title="contact" url="/faq"/>
          <NavItem title="about" url="/faq"/>
        </ul>
        <div className="flex items-center justify-evenly gap-10">
          <SearchIcon />
          <CartIcon />
          <UserIcon />
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
