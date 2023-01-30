import { redirect, useParams } from "react-router-dom";
import MovieDetail from "../../components/MovieDetail";

interface IMovieDetailViewProps extends React.PropsWithChildren {}
const MovieDetailView: React.FunctionComponent<IMovieDetailViewProps> = (
  props
): JSX.Element => {
  const params = useParams();

  const id: number = params.id ? +params.id : 1

  return (
    <div>
      <MovieDetail movieId={id} />
    </div>
  );
};

export default MovieDetailView;
