import { BsPlayCircle, BsStarFill } from "react-icons/bs";
import movies from "../../movies";
import Button from "../Base/Button";

interface MovieDetailProps extends React.PropsWithChildren {
  movieId: number;
}

const MovieDetail: React.FunctionComponent<MovieDetailProps> = ({
  movieId,
}): JSX.Element => {
  const movie = movies[movieId];

  return (
    <section className="flex h-auto w-screen select-none flex-col justify-between overflow-y-scroll bg-light-primary text-2xl uppercase text-light-content dark:bg-dark-primary dark:text-dark-content md:h-[calc(100vh-176px)] md:overflow-hidden">
      <div className="flex flex-col items-center justify-between p-4 text-light-heading dark:text-dark-heading md:flex-row">
        <div className="flex items-center gap-2">
          <h1 className="font-bold">{movie.title}</h1>
          <p className="text-light-content dark:text-dark-content">
            {movie.year}
          </p>
        </div>
        <p className="flex items-center gap-1 text-lg">
          <BsStarFill className="inline text-[gold] " size={20} />
          <span className="text-3xl">{movie.rate}</span>/10{" "}
          <span className="font-bold text-light-hover dark:text-dark-hover">
            IMDB
          </span>
        </p>
      </div>
      <div className="relative flex h-1/2 w-full">
        <img
          className="absolute bottom-2 left-2 z-10 w-32 md:relative md:bottom-0 md:left-0 md:w-auto"
          src={movie.poster}
          alt={movie.title}
        />
        <div className="relative flex h-[50vh] w-full items-center justify-center md:h-auto">
          <div className="z-10 flex cursor-pointer items-center justify-center gap-3 text-light-heading dark:text-dark-heading md:absolute md:bottom-4 md:left-4">
            <BsPlayCircle size={50} /> play trailer
          </div>
          <img
            className="absolute top-0 left-0 h-full w-full object-cover object-center opacity-40"
            src={movie.slider}
            alt={movie.title}
          />
        </div>
      </div>
      <div className="flex h-full flex-col-reverse justify-between text-sm md:flex-row-reverse">
        <div className="flex w-full flex-col items-center justify-between gap-4 p-10">
          <div className="flex w-full items-center justify-start gap-2 md:justify-center">
            {movie.genre.map((item, index) => {
              return (
                <span
                  className="cursor-pointer rounded-full border border-light-content px-[12px] py-[5px] capitalize  hover:bg-light-secondary dark:border-dark-content  dark:hover:bg-dark-secondary"
                  key={index}
                >
                  {item}
                </span>
              );
            })}
          </div>
          <div className="w-full">
            <Button title="add to cart" />
          </div>
        </div>
        <div className="flex flex-col justify-between gap-5 p-4">
          <p>{movie.summary}</p>

          <div>
            <div>
              <span className="mr-2 text-light-heading dark:text-dark-heading">
                Director
              </span>
              {movie.director}
            </div>
            <div>
              <span className="mr-2 text-light-heading dark:text-dark-heading">
                stars
              </span>
              {movie.stars.join(" • ")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetail
