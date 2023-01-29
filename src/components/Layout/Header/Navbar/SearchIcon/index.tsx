import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface ISearchIconProps extends React.PropsWithChildren {}

const SearchIcon: React.FunctionComponent<ISearchIconProps> = (
  props
): JSX.Element => {
  return (
    <div className="cursor-pointer text-2xl text-light-heading hover:text-light-hover dark:text-dark-heading dark:hover:text-dark-hover">
      <FontAwesomeIcon icon={faSearch} />
    </div>
  );
};

export default SearchIcon;
