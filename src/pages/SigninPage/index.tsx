import Signin from "../../components/Account/Authentication/Signin";

interface ISigninPageProps extends React.PropsWithChildren{}
const SigninPage: React.FunctionComponent<ISigninPageProps> = (props):JSX.Element => {
    return (
        <div>
            <Signin />
        </div>
    );
};

export default SigninPage;