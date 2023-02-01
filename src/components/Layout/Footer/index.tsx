interface IFooterProps extends React.PropsWithChildren {}

const Footer: React.FunctionComponent<IFooterProps> = (props): JSX.Element => {
  return (
  <div>
    <footer className="flex h-16 items-center justify-center bg-light-secondary dark:bg-dark-secondary">
      <h3 className="text-md pt-2 font-bold uppercase  dark:text-dark-heading">
           © 2023 Copyright: Quera Bootcamp Group 9
        </h3>
    </footer>
  </div>
  );
};

export default Footer;
