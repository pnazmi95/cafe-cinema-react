import React, { useState } from "react";
import movies from "../../movies";
import Aside from "./Aside";
interface IShoppingCartProps extends React.PropsWithChildren {}

const recreateList = movies.map((item: any) => {
  item.count = 1;
  item.price = 5;
  item.cost = item.price;
  return item;
});

const ShoppingCart: React.FunctionComponent<IShoppingCartProps> = (
  props
): JSX.Element => {
  const [movie, setMovie] = useState(recreateList);

  const plusCount = (id: string) => {
    const newList = movie.map((item) => {
      if (item.id === id) {
        item.count++;
        item.cost = item.price * item.count;
      }
      return item;
    });
    setMovie(newList);
  };

  const minesCount = (id: string) => {
    let newList = movie.map((item) => {
      if (item.id === id) {
        item.count--;
        item.cost -= item.price;
      }
      return item;
    });
    newList = newList.filter((item) => item.count > 0);
    setMovie(newList);
  };

  const deleteItem = (id: string) => {
    const movieDlt = movie.filter((item) => item.id !== id);
    setMovie(movieDlt);
  };

  let totalCost = movie.reduce((acc, curItem) => curItem.cost + acc, 0);

  return (
    <div className="flex min-h-screen select-none flex-col bg-light-primary py-8 px-12 dark:bg-dark-primary dark:text-light-secondary lg:flex-row lg:gap-10 lg:px-20 lg:py-12 xl:flex-row xl:gap-10 xl:px-20 xl:py-12 ">
      <section className="flex flex-col lg:w-[70%] xl:w-[70%]">
        <nav className="flex justify-between border-b-2 py-3 px-4 text-2xl font-bold xl:px-8">
          <div>Shopping Card</div>
          <div className="text-lg font-semibold">{movie.length} items</div>
        </nav>
        <header className="font-base xl: flex justify-center gap-6 py-6 text-lg md:justify-start md:gap-16 md:px-24 xl:gap-36 xl:px-32">
          <div>Movie Details</div>
          <div className="">Quantity</div>
          <div className="">Price</div>
        </header>
        <main className="flex flex-col gap-7 text-base xl:text-xl ">
          {movie.map((item) => {
            return (
              <div
                key={item.id}
                className="sm:gap-18 grid grid-cols-4 gap-9 py-3 px-10 lg:grid-cols-5 lg:gap-4 xl:grid-cols-5 xl:gap-4"
              >
                <div className="flex flex-col items-center justify-center gap-5 md:flex-row lg:col-span-2 lg:flex-row xl:col-span-2 xl:flex-row">
                  <img
                    className="w-22 md:w-20 lg:w-20 xl:w-28"
                    src={item.poster}
                    alt={`${item.title}`}
                  />
                  <div className="flex w-32  justify-center text-xs sm:w-44 sm:text-base sm:font-normal ">
                    {item.title}
                  </div>
                </div>
                <div className="flex flex-col-reverse items-center justify-center gap-2 sm:flex-row md:flex-row lg:flex-row xl:flex-row xl:gap-4">
                  <button
                    className="w-7 rounded-lg bg-light-content p-1 text-light-secondary hover:bg-dark-hover hover:text-light-heading hover:dark:bg-dark-hover dark:bg-dark-content dark:text-dark-primary xl:w-9 xl:p-2 xl:text-xl"
                    onClick={() => minesCount(item.id)}
                  >
                    -
                  </button>
                  <div>{item.count}</div>
                  <button
                    className="w-7 rounded-lg bg-light-content p-1 text-light-secondary hover:bg-dark-hover hover:text-light-heading hover:dark:bg-dark-hover dark:bg-dark-content dark:text-dark-primary xl:w-9 xl:p-2 xl:text-xl"
                    onClick={() => plusCount(item.id)}
                  >
                    +
                  </button>
                </div>
                <div className="flex items-center justify-center">
                  {item.cost} $
                </div>
                <div className="flex items-center">
                  <button
                    className="rounded-lg bg-light-content px-4 py-1.5 text-xs text-light-secondary hover:bg-dark-hover   hover:text-light-heading hover:dark:bg-dark-hover dark:bg-dark-content dark:text-dark-primary xl:px-7 xl:py-2 xl:text-xl"
                    onClick={() => deleteItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </main>
      </section>

      <Aside totalCost={totalCost} />
    </div>
  );
};

export default ShoppingCart;
