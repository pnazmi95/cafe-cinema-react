import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Badge from "../../../../Base/Badge";
import { NavLink } from "react-router-dom";

interface IUserIconProps extends React.PropsWithChildren {}
const UserIcon: React.FunctionComponent<IUserIconProps> = (
  props
): JSX.Element => {
  return (
    <div className="relative cursor-pointer text-3xl text-light-heading hover:text-light-hover dark:text-dark-heading dark:hover:text-dark-hover">
      <NavLink
        to={"/sign-in"}
        className={({ isActive }) =>
          isActive
            ? "rounded-b-md text-light-hover dark:text-dark-hover"
            : undefined
        }
      >
        <FontAwesomeIcon icon={faUser} />
        <Badge value={12} />
      </NavLink>
    </div>
  );
};

export default UserIcon;
