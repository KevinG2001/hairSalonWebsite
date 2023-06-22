import React from "react";
import "./App.css";
import Category from "./components/Category";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AllProducts from "./components/AllProducts";
import Slideshow from "./components/Slideshow";
import Newproducts from "./components/NewProducts";

function App() {
  return (
    <div className="mainApp">
      <Navbar />
      <Slideshow />
      <Category />
      <AllProducts />
      <Newproducts />
      <Footer />
    </div>
  );
}

export default App;
