import React from "react";
import Category from "./Category";
import Allproducts from "../AllProducts";
import Navbar from "../global/Navbar";
import Footer from "../global/Footer";
import Slideshow from "./Slideshow";
import DermalogicalBanner from "./DermalogicalBanner";
import Newproducts from ".././home/Newproducts";

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
