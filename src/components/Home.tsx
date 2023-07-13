import React from "react";
import Category from "./home/Category";
import Allproducts from "./Products/AllProducts";
import Navbar from "./global/Navbar";
import Footer from "./global/Footer";
import Slideshow from "./home/Slideshow";
import DermalogicalBanner from "./home/DermalogicalBanner";
import Newproducts from "./home/Newproducts";

function Home() {
  return (
    <>
      <Navbar />
      <Slideshow />
      <Category />
      <DermalogicalBanner />
      <Newproducts />
      <Footer />
    </>
  );
}

export default Home;
