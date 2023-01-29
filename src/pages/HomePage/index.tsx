import Slider from "../../components/Slider";

interface IHomePageProps extends React.PropsWithChildren {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props): JSX.Element => {
  return (
    <div>
      <Slider />
    </div>
  );
};

export default HomePage;