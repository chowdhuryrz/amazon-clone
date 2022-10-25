import { StarIcon } from "@heroicons/react/solid";
import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, addToCart } from "../slices/cartSlice";

const CheckoutProduct = ({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
}) => {
  const dispatch = useDispatch();
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

  const removeItemFromCart = () => {
    dispatch(removeFromCart({ id }));
  };
  return (
    <>
      <div className="grid grid-cols-5">
        <img
          src={image}
          className="object-contain h-[200px] w-[200px]"
          alt=""
        />
        <div className="col-span-3 mx-5 ">
          <p>{title}</p>
          <div className="flex">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <StarIcon key={i} className="text-yellow-500 h-5" />
              ))}
          </div>
          <p className="text-xs my-2 line-clamp-3">{description}</p>
          <p>${price}</p>
          {hasPrime && (
            <div className="flex items-center space-x-2">
              <img
                className="w-12"
                src="https://links.papareact.com/fdw"
                alt=""
                loading="lazy"
              />
              <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
            </div>
          )}
        </div>
        <div className="flex flex-col space-y-2 my-auto justify-self-end">
          <button className="button" onClick={addItemToCart}>
            Add to Cart
          </button>
          <button onClick={removeItemFromCart} className="button">
            Remove from Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default CheckoutProduct;
