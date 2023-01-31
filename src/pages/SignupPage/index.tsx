import Signup from "../../components/Account/Authentication/Signup";

interface ISignupPageProps extends React.PropsWithChildren{}
const SignupPage: React.FunctionComponent<ISignupPageProps> = (props):JSX.Element => {
    return (
        <div>
            <Signup />
        </div>
    );
};

export default SignupPage;