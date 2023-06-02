import React from "react";
import slideStyles from "../styling/slideStyles.module.scss";
import leftArrow from "../assets/arrow-left.svg";
import rightArrow from "../assets/arrow-right.svg";
function Slideshow() {
  console.log(leftArrow);
  return (
    <>
      <div className={slideStyles.slideShowContainer}>
        <div className={slideStyles.slideHolder}>
          <div className={slideStyles.slideArrowBtn}>
            <img src={leftArrow} alt="" className={slideStyles.arrowSVG} />
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
            <img src={rightArrow} alt="" className={slideStyles.arrowSVG} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Slideshow;
