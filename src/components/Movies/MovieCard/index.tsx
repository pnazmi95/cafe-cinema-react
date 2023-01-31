import movies from "../../../movies";
import Button from "../../Base/Button";

interface IMoviesCardProps extends React.PropsWithChildren {
  movieId: number;
}

const MovieCard: React.FunctionComponent<IMoviesCardProps> = ({
  movieId,
}): JSX.Element => {
  return (
    <div className=" group mx-auto w-fit overflow-hidden rounded-md bg-light-secondary p-3 text-light-heading transition-all hover:scale-110 dark:bg-dark-secondary dark:text-dark-heading">
      <div className=" relative">
        <img src={movies[movieId].poster} alt={movies[movieId].title} />
        <div className=" absolute top-0 left-0 z-10 hidden h-full flex-col items-center justify-between bg-light-primary p-3 text-justify text-light-content group-hover:flex dark:bg-dark-primary dark:text-dark-content">
          {movies[movieId].summary}
          <Button title="Read More" id={movieId}/>
        </div>
      </div>
      <h4 className="mt-2 font-bold">{movies[movieId].title}</h4>
      <div className="flex justify-between ">
        <p className="text-justify">{movies[movieId].year}</p>
        <p>
          {movies[movieId].rate}/10{" "}
          <span className="text-light-hover dark:text-light-hover"> IMDB</span>
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
