import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";

const Product = ({ id, title, price, description, category, image }) => {
  const dispatch = useDispatch();
  const MAX_RATING = 5;
  const MIN_RATING = 1;
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING)
  );

  const [hasPrime] = useState(Math.random() < 0.5);

  const addItemToCart = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime,
    };
    dispatch(addToCart(product));
  };
  return (
    <>
      <div className="relative flex flex-col m-5 bg-white z-30 p-10">
        <p className="absolute top-2 right-2 text-xs italic text-gray-400 my-3">
          {category}
        </p>
        <img className="h-[200px] w[200px] object-contain" src={image} alt="" />
        <h4>{title}</h4>
        <div className="flex">
          {Array(rating)
            .fill()
            .map(() => (
              <StarIcon className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-2">{description}</p>
        <div className="mb-5">${price}</div>
        {hasPrime && (
          <div className="flex items-center space-x-2 -mt-5">
            <img
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt=""
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}

        <button onClick={addItemToCart} className="mt-auto button">
          Add to Basket
        </button>
      </div>
    </>
  );
};

export default Product;
