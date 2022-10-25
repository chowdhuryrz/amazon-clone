import React from "react";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
import Navbar from "../components/Navbar";

const Home = ({ products }) => {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl mx-auto">
        <Banner />
        <ProductFeed products={products} />
      </div>
    </>
  );
};

export default Home;
