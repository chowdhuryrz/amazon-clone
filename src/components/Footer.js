import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="hidden lg:inline-block lg:w-full bg-amazon_blue-light">
        <div className="grid grid-cols-4 gap-24 text-white p-14 place-content-center mx-32">
          <div className="space-y-2">
            <h1 className="font-bold mb-4">Get to Know Us</h1>
            <p className="text-sm underlines">Careers</p>
            <p className="text-sm underlines">Amazon Newsletter</p>
            <p className="text-sm underlines">About Amazon</p>
            <p className="text-sm underlines">Sustainability</p>
            <p className="text-sm underlines">Press Center</p>
            <p className="text-sm underlines">Investor Relations</p>
            <p className="text-sm underlines">Amazon Devices</p>
            <p className="text-sm underlines">Amazon Science</p>
          </div>
          <div className="space-y-2">
            <h1 className="font-bold mb-4">Make Money with Us</h1>
            <p className="text-sm underlines">Sell products on Amazon</p>
            <p className="text-sm underlines">Sell apps on Amazon</p>
            <p className="text-sm underlines">Supply to Amazon</p>
            <p className="text-sm underlines">Become an Affiliate</p>
            <p className="text-sm underlines">Become a Delivery Driver</p>
            <p className="text-sm underlines">
              Start a package delivery business
            </p>
            <p className="text-sm underlines">Advertise Your Products</p>
            <p className="text-sm underlines">Self-Publish with Us</p>
            <p className="text-sm underlines">Host an Amazon Hub</p>
            <p className="text-sm underlines">See More Way to Make Money</p>
          </div>
          <div className="space-y-2">
            <h1 className="font-bold mb-4">Amazon Payment Products</h1>
            <p className="text-sm underlines">Amazon Rewards Visa Signature</p>
            <p className="text-sm underlines">Amazon Store Card</p>
            <p className="text-sm underlines">Amazon Secured Card</p>
            <p className="text-sm underliens">Amazon Business Card</p>
            <p className="text-sm underlines">Shop with Points</p>
            <p className="text-sm underlines">Credit Card Marketplace</p>
            <p className="text-sm underlines">Reload Your Balance</p>
            <p className="text-sm underlines">Amazon Currency Converter</p>
          </div>
          <div className="space-y-2">
            <h1 className="font-bold mb-4">Let Us Help You</h1>
            <p className="text-sm underlines">Amazon and COVID-19</p>
            <p className="text-sm underlines">Your Account</p>
            <p className="text-sm underlines">Your Orders</p>
            <p className="text-sm underlines">Shipping Rates & Policies</p>
            <p className="text-sm underlines">Amazon Prime</p>
            <p className="text-sm underlines">Returns & Replacements</p>
            <p className="text-sm underlines">
              Manage Your Content and Devices
            </p>
            <p className="text-sm underlines">
              Your Recalls and Product Safety Alerts
            </p>
            <p className="text-sm underlines">Amazon Assistant</p>
            <p className="text-sm underlines">Help</p>
          </div>
        </div>
        <div className="border-t border-gray-700 flex items-center justify-center">
          <Link to="/">
            <img
              className="w-[100px] h-[30px] object-contain cursor-pointer mt-5"
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt=""
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
