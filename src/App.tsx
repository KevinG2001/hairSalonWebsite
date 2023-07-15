import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProductDetails from "./components/Products/ProductDetails";
import AllProductFrame from "./components/AllProductFrame";
import Dermalogica from "./components/Products/Dermalogica";
import BrandedProducts from "./components/Products/BrandedProducts";
import StylingProduct from "./components/Products/StylingProduct";
import Haircare from "./components/Products/Haircare";

function App() {
  return (
    <Router>
      <div className="mainApp">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:productname" element={<ProductDetails />} />
          <Route path="/products" element={<AllProductFrame />} />
          <Route path="/category/dermalogica" element={<Dermalogica />} />
          <Route path="/category/haircare" element={<Haircare />} />
          <Route path="/category/:brand" element={<BrandedProducts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
