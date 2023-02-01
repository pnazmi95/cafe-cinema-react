import { About } from "../../components/About";

interface IAboutPageProps extends React.PropsWithChildren{}
const AboutPage: React.FunctionComponent<IAboutPageProps> = (props):JSX.Element => {
    return (
        <div>
            <About />
        </div>
    );
};

export default AboutPage;