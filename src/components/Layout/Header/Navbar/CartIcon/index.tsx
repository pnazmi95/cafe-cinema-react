import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Badge from "../../../../Base/Badge";

interface ICartIconProps extends React.PropsWithChildren {}

const CartIcon: React.FunctionComponent<ICartIconProps> = (
  props
): JSX.Element => {
  return (
    <div>
      <div className="relative cursor-pointer text-3xl text-light-heading hover:text-light-hover dark:text-dark-heading dark:hover:text-dark-hover">
        <FontAwesomeIcon icon={faCartPlus} />
        <Badge value={2} />
      </div>
    </div>
  );
};

export default CartIcon;
