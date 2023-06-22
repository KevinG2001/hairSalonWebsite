import React from "react";
import Category from "./Category";
import Newproducts from "../AllProducts";
import Navbar from "../global/Navbar";
import Footer from "../global/Footer";
import Slideshow from "./Slideshow";

function Home() {
  return (
    <>
      <Navbar />
      <Slideshow />
      <Category />
      <Newproducts />
      <Footer />
    </>
  );
}

export default Home;
