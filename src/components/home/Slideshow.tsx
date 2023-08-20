import { useEffect, useState } from "react";
import slideStyles from "../../styling/slideStyles.module.scss";
import leftArrow from "../../assets/arrow-left.svg";
import rightArrow from "../../assets/arrow-right.svg";
import { Link } from "react-router-dom";

const images = [
  "../../assets/slideshowbgs/model1.webp",
  "../../assets/slideshowBgs/backgroundModel2.webp",
];

function Slideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextImage = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  const previousImage = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleTransitionEnd = () => {
    setIsAnimating(false);
  };

  return (
    <>
      <div
        className={`${slideStyles.slideShowContainer} ${
          isAnimating ? slideStyles.animating : ""
        }`}
        onTransitionEnd={handleTransitionEnd}
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
        }}
      >
        <div className={slideStyles.slideHolder}>
          <div className={slideStyles.slideArrowBtn}>
            <img
              src={leftArrow}
              alt=""
              className={slideStyles.arrowSVG}
              onClick={previousImage}
            />
          </div>
          <div className={slideStyles.slideCenterBox}>
            <div className={slideStyles.slideTitle}>Welcome To</div>
            <div className={slideStyles.slideSubTitle}>
              Debonair Hair & Beauty
            </div>
            <div className={slideStyles.slideButtonHolder}>
              <Link to={'/products'}>
              <button id={slideStyles.slideBrowseBtn}>Browse Shop</button>
              </Link>
              <button id={slideStyles.slideBookBtn}>Book Now</button>
            </div>
          </div>
          <div className={slideStyles.slideArrowBtn}>
            <img
              src={rightArrow}
              alt=""
              className={slideStyles.arrowSVG}
              onClick={nextImage}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Slideshow;
