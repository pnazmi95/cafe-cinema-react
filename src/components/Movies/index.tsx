import movies from "../../movies";
import Movie from "./MovieCard";

interface IMoviesProps extends React.PropsWithChildren {}

const Movies: React.FunctionComponent<IMoviesProps> = (): JSX.Element => {
  return (
    <section className="grid grid-cols-1 gap-4 bg-light-primary px-8 py-4 dark:bg-dark-primary md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {movies.map((_, index) => {
        return (
          <div key={index}>
            <Movie movieId={index} />
          </div>
        );
      })}
    </section>
  );
};

export default Movies;
