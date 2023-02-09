import Contact from "../../components/Contact";

interface IContactPageProps extends React.PropsWithChildren {}
const ContactPage: React.FunctionComponent<IContactPageProps> = (
  props
): JSX.Element => {
  return <Contact />;
};

export default ContactPage;
