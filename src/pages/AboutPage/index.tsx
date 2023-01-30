interface IAboutPageProps extends React.PropsWithChildren{}
const AboutPage: React.FunctionComponent<IAboutPageProps> = (props):JSX.Element => {
    return (
        <div className="bg-dark-secondary h-[30px]">
            This is about
        </div>
    );
};

export default AboutPage;