import CartDetail from "../../components/CartDetail";

interface IShoppingCartProps extends React.PropsWithChildren {}
const ShoppingCart: React.FunctionComponent<IShoppingCartProps> = (
  props
): JSX.Element => {
  return <div>
    <CartDetail />
  </div>;
};

export default ShoppingCart;
