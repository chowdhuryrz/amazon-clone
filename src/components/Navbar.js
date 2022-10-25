import React from "react";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";
import { UserAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { selectItems } from "../slices/cartSlice";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector(selectItems);
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Link to="/">
            <img
              className="w-[150px] h-[40px] object-contain cursor-pointer"
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt=""
            />
          </Link>
        </div>
        <div className="hidden pl-2 ml-3 mr-5 md:inline-block relative">
          <p className="text-xs text-gray-200">Hello</p>
          <p className="font-bold text-white text-sm">Select your address</p>
          <LocationMarkerIcon className="h-5 absolute text-white -left-3 top-3" />
        </div>
        <div className="hidden sm:flex bg-yellow-400 hover:bg-yellow-500 items-center h-10 rounded-md flex-grow cursor-pointer">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
          />
          <SearchIcon className="h-12 p-3" />
        </div>

        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div onClick={handleSignOut} className="link">
            <Link to="/signin">
              <p>
                {user?.displayName ? `Hello, ${user?.displayName}` : `Sign In`}
              </p>
              <p className="font-extrabold md:text-sm">Account & Lists</p>
            </Link>
          </div>

          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <Link to="/checkout">
            <div className="items-center flex link relative">
              <span className="absolute top-0 right-0 md:right-6 h-4 w-4 bg-yellow-400 rounded-full text-center text-black font-bold">
                {items.length}
              </span>
              <ShoppingCartIcon className="h-10" />
              <p className="hidden md:inline font-extrabold md:text-sm mt-2">
                Cart
              </p>
            </div>
          </Link>
        </div>
      </div>

      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Today's Deals</p>
        <p className="link">Best Sellers</p>
        <p className="link">Amazon Basics</p>
        <p className="link hidden lg:inline-flex">Gift Cards</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Pet Supplies</p>
        <p className="link hidden lg:inline-flex">Find a Gift</p>
        <p className="link hidden lg:inline-flex">Pharmacy</p>
        <p className="link hidden lg:inline-flex">Video Games</p>
        <p className="link hidden lg:inline-flex">Livestreams</p>
        <p className="link hidden lg:inline-flex">Coupons</p>
        <p className="link hidden lg:inline-flex">Customer Service</p>
      </div>
    </>
  );
};

export default Navbar;
