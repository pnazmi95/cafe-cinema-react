import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faLightbulb } from "@fortawesome/free-regular-svg-icons";

const DARK = <FontAwesomeIcon icon={faMoon} />;
const LIGHT = <FontAwesomeIcon icon={faLightbulb} />;
interface IDarkModeToggleProps extends React.PropsWithChildren {}

const DarkModeToggle: React.FunctionComponent<IDarkModeToggleProps> = (
  props
): JSX.Element => {
  const [toggle, setToggle] = useState(true);
  const darkModeHandler = () => {
    setToggle(!toggle);
    toggle
      ? (document.documentElement.className = "dark")
      : (document.documentElement.className = "");
  };
  return (
    <div
      className="cursor-pointer text-3xl text-light-heading hover:text-light-hover dark:text-dark-heading dark:hover:text-dark-hover"
      onClick={darkModeHandler}
    >
      {!toggle ? LIGHT : DARK}
    </div>
  );
};

export default DarkModeToggle;
