import React from "react";
import BrandStyling from "../../styling/brandStyling.module.scss";
import Navbar from "../global/Navbar";

function Dermalgocia() {
  return (
    <>
      <Navbar />
      <div className={BrandStyling.Wrapper}></div>
    </>
  );
}

export default Dermalgocia;
