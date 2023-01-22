import React, { useState } from "react";
import movies from "../../movies";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const movieItems = [...movies];

function SeriesSlider(): JSX.Element {
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
    <div className="flex flex-col items-center justify-center bg-dark-primary dark:bg-light-primary">
      {/* <h1 className="mt-10 text-center text-4xl text-light-heading dark:text-light-primary">
    Movies
  </h1> */}
      <div className="group relative m-auto h-[49rem] w-full max-w-7xl py-16 px-4">
        <div
          style={{
            backgroundImage: `url(${movieItems[currentIndex].slider})`,
          }}
          className="h-full w-full rounded-2xl bg-cover bg-center duration-500"
        ></div>
        {/* left arrow */}
        <div className="absolute top-[50%] left-5 hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-dark-primary/20 p-2 text-2xl text-dark-heading group-hover:block dark:bg-light-primary dark:text-dark-primary">
          <BsChevronCompactLeft onClick={prevSlideHandler} size={30} />
        </div>
        {/* right arrow */}
        <div className="absolute top-[50%] right-5 hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-dark-primary/20 p-2 text-2xl text-dark-heading group-hover:block dark:bg-light-primary dark:text-dark-primary">
          <BsChevronCompactRight onClick={nextSlideHandler} size={30} />
        </div>
        {/* dots */}
        <div className="top-4 flex items-center justify-center py-2">
          {movieItems.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                goToSlide(index);
              }}
              className="cursor-pointer text-2xl text-dark-primary dark:text-light-primary"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SeriesSlider;
