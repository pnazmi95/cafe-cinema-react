import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

interface ILayoutProps extends React.PropsWithChildren {}

const Layout: React.FunctionComponent<ILayoutProps> = (props): JSX.Element => {
  return (
    <div className="font-display overflow-hidden">
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;



