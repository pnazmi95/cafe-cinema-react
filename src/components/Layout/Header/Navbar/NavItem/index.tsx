interface INavItemProps extends React.PropsWithChildren {
  title: string;
  url?: string;
}

const NavItem: React.FunctionComponent<INavItemProps> = ({
  title,
}): JSX.Element => {
  return (
    <li className="cursor-pointer  text-xl font-bold uppercase text-light-heading hover:text-light-hover dark:text-dark-heading dark:hover:text-dark-hover">
      {title}
    </li>
  );
};

export default NavItem;
