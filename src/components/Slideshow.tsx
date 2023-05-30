import React from "react";
import slideStyles from "../styling/slideStyles.module.scss";

function Slideshow() {
  return (
    <>
      <div className={slideStyles.slideShowContainer}>
        <div className={slideStyles.slideHolder}>
          <div className={slideStyles.slideArrowBtn}>
            <button>Left</button>
          </div>
          <div className={slideStyles.slideCenterBox}>
            <div className={slideStyles.slideTitle}>Welcome To</div>
            <div className={slideStyles.slideSubTitle}>
              Debonair Hair & Beauty
            </div>
            <div className={slideStyles.slideButtonHolder}>
              <button id={slideStyles.slideBrowseBtn}>Browse Shop</button>
              <button id={slideStyles.slideBookBtn}>Book Now</button>
            </div>
          </div>
          <div className={slideStyles.slideArrowBtn}>
            <button>Right</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slideshow;
