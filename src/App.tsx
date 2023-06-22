import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <Router>
      <div className="mainApp">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:productname" element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
