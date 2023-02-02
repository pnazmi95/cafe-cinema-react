import movies from "../../movies";
interface IMovieDetailProps extends React.PropsWithChildren {
  movieId: number;
}

const MovieDetail: React.FunctionComponent<IMovieDetailProps> = ({
  movieId,
}): JSX.Element => {
  return (
    <section
      className="h-[calc(100vh-176px)] w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${movies[movieId].slider})`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center center`,
        backgroundSize: `cover`,
      }}
    >
      <div className="flex h-full w-full items-center justify-center bg-light-primary p-5 backdrop-blur-lg dark:bg-dark-primary md:w-1/2">
        <div className="flex flex-col gap-5  sm:flex-row">
          <img
            className="w-1/2 md:w-96"
            src={movies[movieId].poster}
            alt={movies[movieId].title}
          />
          <div className="flex flex-col justify-between dark:text-light-secondary ">
            <div className="flex flex-col">
              <h2 className=" text-center  text-3xl md:text-5xl">
                {movies[movieId].title}
              </h2>
              <div className="flex justify-between ">
                <span className="md:text-2xl"> {movies[movieId].year}</span>
                <div>
                  <span className="text-2xl md:text-3xl">
                    {movies[movieId].rate}
                  </span>
                  <span className="md:text-2xl ">/10</span>
                  <span className="text-1xl pl-2 pr-3 text-light-hover md:font-extrabold">
                    IMDB
                  </span>
                </div>
              </div>
              <span className="text-2xl text-light-hover">summary:</span>
              <p className="text-1xl"> {movies[movieId].summary}</p>
            </div>
            <div>
              <div>
                <span className="text-2xl text-light-hover">genre:</span>
                <span className="text-1xl">
                  {" "}
                  {movies[movieId].genre.join(" | ")}
                </span>
              </div>
              <div>
                <span className="text-2xl text-light-hover">director:</span>
                <span className="text-1xl"> {movies[movieId].director}</span>
              </div>
              <div>
                <span className="text-2xl text-light-hover">stars: </span>
                <span className="text-1xl">
                  {movies[movieId].stars.join(" | ")}
                </span>
              </div>
              {/* onClick={() => handleClick(movieId)} */}
              <button className=" border-blue-700 center flex w-full content-center items-center justify-center rounded bg-dark-hover py-2 px-4 text-2xl font-bold uppercase text-dark-primary">
                buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MovieDetail;
