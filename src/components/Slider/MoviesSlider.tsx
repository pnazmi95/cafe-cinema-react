import React from "react";
import movies from "../../movies";

const movieItems = [...movies];

function MoviesSlider(): JSX.Element {
  return (
    <div className="flex items-center justify-center bg-light-primary dark:bg-dark-primary">
      <div className="relative m-auto h-[49rem] w-full max-w-7xl py-16 px-4">
        <div
          style={{ backgroundImage: `url(${movieItems[5].slider})` }}
          className="h-full w-full rounded-2xl bg-cover bg-center duration-500"
        ></div>
      </div>
      {/* left arrow */}

      {/* right arrow */}
    </div>
  );
}

export default MoviesSlider;
