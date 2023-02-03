import { MouseEventHandler } from "react";
import { NavLink } from "react-router-dom";

interface INavItemProps extends React.PropsWithChildren {
  title: string;
  url?: string;
  onClick?: MouseEventHandler;
}

const NavItem: React.FunctionComponent<INavItemProps> = ({
  title,
  url,
  onClick
}): JSX.Element => {
  return (
    <li className="cursor-pointer text-xl font-bold uppercase text-light-heading hover:text-light-hover dark:text-dark-heading dark:hover:text-dark-hover"
    onClick={onClick}
    >
      <NavLink
        to={`${url}`}
        className={({ isActive }) =>
          isActive
            ? "h-full w-full rounded-b-md text-light-hover dark:text-dark-hover"
            : undefined
        }
      >
        {title}
      </NavLink>
    </li>
  );
};

export default NavItem;
