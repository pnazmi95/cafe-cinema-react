import React, { useState } from "react";
import movies from "../../movies";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const movieItems = [...movies];

function MoviesSlider(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlideHandler = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? movieItems.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlideHandler = () => {
    const isLastSlide = currentIndex === movieItems.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-light-primary dark:bg-dark-primary">
      <div className="group relative m-auto h-[calc(100vh-128px)] w-full max-w-7xl pb-12 pt-2 px-2">
        <div
          style={{
            backgroundImage: `url(${movieItems[currentIndex].slider})`,
          }}
          className="h-full w-full rounded-2xl bg-cover bg-center duration-500"
        ></div>
        {/* left arrow */}
        <div className="transition-opacity duration-500 absolute top-[50%] left-5 -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-dark-primary/20 p-2 text-2xl text-dark-heading opacity-0 group-hover:opacity-100 dark:bg-light-primary dark:text-dark-primary">
          <BsChevronCompactLeft onClick={prevSlideHandler} size={30} />
        </div>
        {/* right arrow */}
        <div className="transition-opacity duration-500 absolute top-[50%] right-5 -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-dark-primary/20 p-2 text-2xl text-dark-heading opacity-0 group-hover:opacity-100 dark:bg-light-primary dark:text-dark-primary">
          <BsChevronCompactRight onClick={nextSlideHandler} size={30} />
        </div>
        {/* dots */}
        <div className="top-4 flex items-center justify-center gap-2 py-5">
          {movieItems.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                goToSlide(index);
              }}
              className={`h-[0.5rem] w-[0.5rem] cursor-pointer rounded-full bg-dark-primary dark:bg-light-primary ${
                currentIndex === index && "bg-dark-error dark:bg-dark-error"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MoviesSlider;
