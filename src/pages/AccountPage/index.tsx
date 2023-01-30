interface IAccountPageProps extends React.PropsWithChildren{}
const AccountPage: React.FunctionComponent<IAccountPageProps> = (props):JSX.Element => {
    return (
        <div className="bg-dark-secondary h-[30px]">
            This is account page
        </div>
    );
};

export default AccountPage;