import React from "react";
import IButtonProps from "../../../interfaces/buttonprops";

function Button({ title }: IButtonProps): JSX.Element {
  return (
    <div>
      <button className="rounded bg-light-content text-dark-primary dark:text-light-secondary hover:bg-dark-hover dark:bg-dark-secondary dark:hover:bg-dark-error px-4 py-2 w-full" type="button">{title}</button>
    </div>
  );
}

export default Button;
