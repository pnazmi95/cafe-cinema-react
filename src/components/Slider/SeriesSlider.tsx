import React, { useState } from "react";
import movies from "../../movies";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const seriesItems = [...movies];

function SeriesSlider(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center bg-dark-primary dark:bg-light-primary">
      <div className="group relative m-auto h-[49rem] w-full max-w-7xl py-16 px-4">
        
      </div>
    </div>
  );
}

export default SeriesSlider;
