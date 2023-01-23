import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

function Cart() {
  return (
    <div>
      <div className="cursor-pointer text-3xl text-light-heading hover:text-light-hover dark:text-dark-heading dark:hover:text-dark-hover">
        <FontAwesomeIcon icon={faCartPlus} />
      </div>
    </div>
  );
}

export default Cart;
