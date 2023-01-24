import React, { useState } from "react";
import movies from "../../movies";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Button from "../common/Button/Button";

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
      <div className="group relative m-auto h-[calc(100vh-128px)] w-full max-w-7xl px-2 pb-12 pt-2">
        <div
          style={{
            backgroundImage: `url(${movieItems[currentIndex].slider})`,
          }}
          className="h-full w-full rounded-2xl bg-cover bg-center duration-500"
        ></div>
        {/* arrows */}
        <div className="duration-400 absolute top-0 left-0 flex h-[calc(100%-48px)] w-full items-center justify-between px-2 pt-2 text-2xl text-dark-heading opacity-0 transition-opacity group-hover:opacity-100">
          <div className="cursor-pointer rounded-full bg-dark-primary/20 p-1 dark:bg-light-primary/20">
            <BsChevronCompactLeft onClick={prevSlideHandler} size={25} />
          </div>
          <div className="cursor-pointer rounded-full bg-dark-primary/20 p-1 dark:bg-light-primary/20">
            <BsChevronCompactRight onClick={nextSlideHandler} size={25} />
          </div>
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
        {/* Card */}
        <div className="absolute top-[47%] left-[6%] flex h-[85%] w-[50%] -translate-x-0 translate-y-[-50%] items-center justify-center gap-3  border-2 border-light-primary bg-light-primary p-3 text-dark-primary dark:border-dark-primary dark:bg-dark-primary dark:text-dark-heading">
          <img
            src={`${movieItems[currentIndex].poster}`}
            className="h-[90%] w-[50%] bg-cover bg-center duration-500"
          ></img>
          <div className="flex h-[90%] max-h-[90%] min-h-[90%] w-[50%] flex-col justify-between">
            <div className="flex flex-col">
              <div
                id="MovieTitle"
                className="font-bold uppercase text-dark-hover dark:text-dark-error "
              >
                {`${movieItems[currentIndex].title}`}
              </div>
              <div id="YearScoreBlock" className="flex justify-between">
                <div>{`${movieItems[currentIndex].year}`}</div>
                <div>
                  {`${movieItems[currentIndex].rate}/10`}
                  <span className="font-bold text-dark-hover dark:text-dark-error ">
                    IMDB
                  </span>
                </div>
              </div>
              <div className="text-justify dark:text-dark-content">{`${movieItems[currentIndex].summary}`}</div>
            </div>
            <div className="flex flex-col">
              <p>
                <span className="font-bold text-dark-hover dark:text-dark-error">
                  Director:{" "}
                </span>
                {`${movieItems[currentIndex].director}`}
              </p>
              <p>
                <span className="font-bold text-dark-hover dark:text-dark-error">
                  Stars:{" "}
                </span>
                {`${movieItems[currentIndex].stars.join(", ")}`}
              </p>
              <p>
                <span className="font-bold text-dark-hover dark:text-dark-error">
                  Geners:{" "}
                </span>
                {`${movieItems[currentIndex].genre.join(", ")}`}
              </p>
              <div className="flex flex-col gap-2">
                <Button title="Add To Card" />
                <Button title="Read More" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviesSlider;

