interface IShoppingCartProps extends React.PropsWithChildren{}
const ShoppingCart: React.FunctionComponent<IShoppingCartProps> = (props):JSX.Element => {
    return (
        <div className="bg-dark-secondary h-[30px]">
            This is Shopping cart
        </div>
    );
};

export default ShoppingCart;