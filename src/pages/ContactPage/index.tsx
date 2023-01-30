interface IContactPageProps extends React.PropsWithChildren{}
const ContactPage: React.FunctionComponent<IContactPageProps> = (props):JSX.Element => {
    return (
        <div className="bg-dark-secondary h-[30px]">
            This is Contact Page
        </div>
    );
};

export default ContactPage;