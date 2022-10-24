import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ProductFeed from "./components/ProductFeed";
import axios from "axios";

function App() {
  const URL = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(URL).then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="max-w-screen-2xl mx-auto">
        <Banner />
        <ProductFeed products={products} />
      </div>
    </div>
  );
}

export default App;
