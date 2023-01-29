interface IButtonProps extends React.PropsWithChildren {
  title: string;
}

const Button: React.FunctionComponent<IButtonProps> = ({
  title,
}): JSX.Element => {
  return (
    <div>
      <button
        className="w-full rounded bg-light-content px-4 py-2 text-dark-primary hover:bg-dark-hover dark:bg-dark-secondary dark:text-light-secondary dark:hover:bg-dark-error"
        type="button"
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
