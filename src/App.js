import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Signin from "./pages/Signin";
import Checkout from "./pages/Checkout";
import Footer from "./components/Footer";

function App() {
  const URL = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(URL).then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <AuthContextProvider>
      <div className="bg-gray-100">
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </div>
    </AuthContextProvider>
  );
}

export default App;
