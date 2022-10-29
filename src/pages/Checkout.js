import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { selectItems, selectTotal } from "../slices/cartSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import { UserAuth } from "../context/AuthContext";

const Checkout = () => {
  const { user } = UserAuth();
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);

  return (
    <>
      <div className="bg-gray-100">
        <Navbar />

        <div className="lg:flex max-w-screen-2xl mx-auto">
          <div className="flex-grow m-5 shadow-sm">
            <img
              className="h-[200px] w-[350px] object-contain"
              src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
              alt=""
            />
            <div className="flex flex-col p-5 space-y-10 bg-white">
              <h1 className="font-bold text-2xl border-b pb-4">
                {items.length === 0
                  ? "Your Amazon Cart is empty"
                  : "Shopping Cart"}
              </h1>
              {items.map((item, i) => (
                <CheckoutProduct
                  key={i}
                  id={item.id}
                  title={item.title}
                  rating={item.rating}
                  price={item.price}
                  description={item.description}
                  category={item.category}
                  image={item.image}
                  hasPrime={item.hasPrime}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col bg-white p-10 shadow-md">
            {items.length > 0 && (
              <div>
                <h2 className="whitespace-nowrap">
                  Subtotal ({items.length} items):{" "}
                  <span className="font-bold">${total}</span>
                </h2>
                <button
                  disabled={!user?.displayName}
                  className={`button mt-2 ${
                    !user?.displayName &&
                    "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                  }`}
                >
                  {!user?.displayName
                    ? "Sign in to checkout"
                    : "Proceed to checkout"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
