import { useState } from "react";

const Aside = ({ totalCost }:any) => {

  return (
    <aside className="flex h-[400px] flex-col  justify-evenly  lg:sticky lg:top-20   lg:w-[30%] lg:justify-between lg:py-1 xl:sticky xl:top-20 xl:w-[30%] xl:justify-between xl:py-1 ">
      <div className="border-b-2 py-3 px-4 text-lg font-bold">
        Order Summary
      </div>
      <div className="text-xm flex items-center justify-around gap-4 font-medium md:justify-center lg:flex-col lg:items-start xl:flex-col xl:items-start ">
        <label htmlFor="">Promo Code</label>
        <input
          type="text"
          className="w-32 rounded-lg bg-light-secondary py-1 px-3 outline-none focus:border-2 focus:border-light-error dark:bg-dark-secondary xl:py-1.5"
        />
        <button className="text-xm w-32 rounded-lg bg-light-content py-1 px-3 text-light-secondary hover:text-light-hover dark:bg-dark-content dark:text-dark-primary lg:py-1.5 xl:text-lg xl:py-1.5">
          Apply
        </button>
      </div>

      <div className="flex items-center justify-around gap-4 px-4 font-medium md:justify-center lg:flex-col lg:items-start lg:px-0 xl:flex-col xl:items-start ">
        <div className="flex gap-6 ">
          <div>Total cost</div>
          <div>{totalCost} $</div>
        </div>
        <button className="w-32 rounded-lg bg-light-content py-2 px-2 text-xs text-light-secondary hover:text-light-hover dark:bg-dark-content dark:text-dark-primary xl:text-lg xl:py-1.5 lg:py-1.5 lg:text-base ">
          Checkout
        </button>
      </div>
    </aside>
  );
};

export default Aside;
