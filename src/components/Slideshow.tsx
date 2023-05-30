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
            <div className={slideStyles.slideSubTitle}>Hair Salon</div>
            <div className={slideStyles.slideButtonHolder}>
              <button>Browse Shop</button>
              <button>Book Now</button>
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
