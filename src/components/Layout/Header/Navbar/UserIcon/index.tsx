import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

interface IUserIconProps extends React.PropsWithChildren {}
const UserIcon: React.FunctionComponent<IUserIconProps> = (
  props
): JSX.Element => {
  return (
    <div className="cursor-pointer text-3xl text-light-heading hover:text-light-hover dark:text-dark-heading dark:hover:text-dark-hover">
      <FontAwesomeIcon icon={faUser} />
    </div>
  );
};

export default UserIcon;
