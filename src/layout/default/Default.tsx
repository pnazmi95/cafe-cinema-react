import Title from "../../components/Title/Title";
import Navbar from "../../components/Navbar/Navbar";
import ILayoutProps from "../../interfaces/layoutprops";


function Default({children} : ILayoutProps): JSX.Element {
  return (
    <div className="font-display">
      <Title />
      <Navbar />
      {children}
    </div>
  );
}

export default Default;
