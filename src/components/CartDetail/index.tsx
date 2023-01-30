import React, { useState } from "react";
import movies from "../../movies";

interface ICartDetailProps extends React.PropsWithChildren {}

const movieEdit = movies.map((item: any) => {
  item.count = 1;
  item.price = 5;
  item.cost = item.price;
  return item;
});

const CartDetail: React.FunctionComponent<ICartDetailProps> = (
  props
): JSX.Element => {
  const [movie, setMovie] = useState(movieEdit);

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

  const totalCost = movie.reduce((acc, curItem) => curItem.cost + acc, 0);

  return (
    <div className="flex select-none bg-light-primary dark:bg-dark-primary dark:text-light-secondary">
      <section className="bg-gray-100 h-fit w-[70%] px-64 py-20">
        <div>
          <div className="flex justify-between border-b-2 py-6 px-3">
            <div className="">Shopping Card</div>
            <div className="">{movie.length} items</div>
          </div>
          <div className="grid grid-cols-4 gap-x-[100px] gap-y-[30px] py-6">
            <div>Movie Details</div>
            <div>Quantity</div>
            <div className="col-span-2">Price</div>
            {movie.map((item) => {
              return (
                <>
                  <div className="flex items-center gap-3 py-3">
                    <img className="w-[50px]" src={item.poster} />
                    <div>{item.title}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      className="w-7 rounded-lg bg-light-content p-1 hover:text-light-hover"
                      onClick={() => minesCount(item.id)}
                    >
                      -
                    </button>
                    <div>{item.count}</div>
                    <button
                      className="w-7 rounded-lg bg-light-content p-1 hover:text-light-hover"
                      onClick={() => plusCount(item.id)}
                    >
                      +
                    </button>
                  </div>

                  <div className="flex items-center">{item.cost} $</div>
                  <div className="flex items-center ">
                    <button
                      className="rounded-lg bg-light-content px-5 py-2 text-sm   hover:text-light-hover"
                      onClick={() => deleteItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
      <aside className="bg-gray-200 sticky top-0 flex h-[800px] w-[30%] flex-col items-start justify-start gap-32 px-16 py-20">
        <div className="border-b-2 py-6">Order Summary</div>
        <div className="flex flex-col gap-7">
          <label htmlFor="">Promo Code</label>
          <input
            type="text"
            className="rounded-lg bg-light-secondary outline-none focus:border-2 focus:border-light-error dark:bg-dark-secondary"
          />
          <button className="rounded-lg bg-light-content py-3 px-10 hover:text-light-hover">
            Apply
          </button>
        </div>

        <div className="flex flex-col gap-7">
          <div className="flex gap-6">
            <div>Total cost</div>
            <div>{totalCost} $</div>
          </div>
          <button className="rounded-lg bg-light-content py-3 px-20 hover:text-light-hover ">
            Checkout
          </button>
        </div>
      </aside>
    </div>
  );
};

export default CartDetail;
