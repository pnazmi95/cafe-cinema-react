import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Badge from "../../../../Base/Badge";
import { NavLink } from "react-router-dom";

interface ICartIconProps extends React.PropsWithChildren {}

const CartIcon: React.FunctionComponent<ICartIconProps> = (
  props
): JSX.Element => {
  return (
    <div className="relative cursor-pointer text-3xl text-light-heading hover:text-light-hover dark:text-dark-heading dark:hover:text-dark-hover">
      <NavLink
        to={"/cart"}
        className={({ isActive }) =>
          isActive
            ? "rounded-b-md text-light-hover dark:text-dark-hover"
            : undefined
        }
      >
        <FontAwesomeIcon icon={faCartPlus} />
        <Badge value={2} />
      </NavLink>
    </div>
  );
};

export default CartIcon;
