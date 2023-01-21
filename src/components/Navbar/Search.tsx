import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// HeroIcon
// const SearchIcon = (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 24 24"
//     strokeWidth={1.5}
//     className="h-6 w-6 cursor-pointer stroke-light-heading hover:stroke-light-hover dark:stroke-dark-heading dark:hover:stroke-dark-hover"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//     />
//   </svg>
// );

// font-awesome

function Search(): JSX.Element {
  return (
    <div className="cursor-pointer text-2xl text-light-heading hover:text-light-hover dark:text-dark-heading dark:hover:text-dark-hover">
      <FontAwesomeIcon icon={faSearch} />
    </div>
  );
}

export default Search;
