import { Link } from "react-router-dom";

interface IButtonProps extends React.PropsWithChildren {
  id?: number;
  title: string;
}

const Button: React.FunctionComponent<IButtonProps> = ({
  title, id
}): JSX.Element => {
  return (
    <Link to={`/movie/${id}`}>
      <button
        className="w-full rounded bg-light-content px-4 py-2 text-dark-primary hover:bg-dark-hover dark:bg-dark-secondary dark:text-light-secondary dark:hover:bg-dark-error"
        type="button"
      >
        {title}
      </button>
    </Link>
  );
};

export default Button;
