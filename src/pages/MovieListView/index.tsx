import Movies from "../../components/Movies";

interface IMovieListViewProps extends React.PropsWithChildren {}
const MovieListView: React.FunctionComponent<IMovieListViewProps> = (
  props
): JSX.Element => {
  return (
    <div>
      <Movies />
    </div>
  );
};

export default MovieListView;
