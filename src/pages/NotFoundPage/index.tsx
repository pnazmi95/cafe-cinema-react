import { FunctionComponent } from "react";

interface INotFoundPageProps extends React.PropsWithChildren {}

const NotFoundPage: FunctionComponent<INotFoundPageProps> = (props): JSX.Element => {
  return <div>404 Page Not Found</div>;
};

export default NotFoundPage;
