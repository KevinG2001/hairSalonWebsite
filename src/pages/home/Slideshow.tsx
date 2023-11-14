import { useEffect, useRef, useState } from "react";
import slideStyles from "../../styling/pages/home/slideStyles.module.scss";
import leftArrow from "../../assets/arrow-left.svg";
import rightArrow from "../../assets/arrow-right.svg";
import { Link } from "react-router-dom";

const images = [
  "../../assets/slideshowBgs/backgroundModel.webp",
  "../../assets/slideshowBgs/backgroundModel2.webp",
];

function Slideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const slideshowContainerRef = useRef<HTMLDivElement>(null);

  // Function to handle changing the background image
  const changeBackgroundImage = (index: number) => {
    if (index == 2) {
      setCurrentImageIndex(0);
    } else if (index === -1) {
      setCurrentImageIndex(images.length - 1);
    } else {
      setCurrentImageIndex(index);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change the index every 2 seconds

    return () => {
      clearInterval(intervalId); // Cleanup the interval on component unmount
    };
  }, []); // Empty dependency array to run the effect only once after initial render

  useEffect(() => {
    // Change background image when currentImageIndex changes
    const container = slideshowContainerRef.current;
    if (container) {
      container.style.backgroundImage = `url(${images[currentImageIndex]})`;
    }
  }, [currentImageIndex]);

  return (
    <>
      <div
        className={slideStyles.slideShowContainer}
        ref={slideshowContainerRef}
      >
        <div className={slideStyles.slideHolder}>
          <div className={slideStyles.slideArrowBtn}>
            <button
              onClick={() => changeBackgroundImage(currentImageIndex - 1)}
              className={slideStyles.slideBtn}
            >
              <img src={leftArrow} alt="" className={slideStyles.arrowSVG} />
            </button>
          </div>
          <div className={slideStyles.slideCenterBox}>
            <div className={slideStyles.slideTitle}>Welcome To</div>
            <div className={slideStyles.slideSubTitle}>
              Debonair Hair & Beauty
            </div>
            <div className={slideStyles.slideButtonHolder}>
              <Link to={"/products"}>
                <button id={slideStyles.slideBrowseBtn}>Browse Shop</button>
              </Link>
              <Link to="/booking">
                <button id={slideStyles.slideBookBtn}>Book Now</button>
              </Link>
            </div>
          </div>
          <div className={slideStyles.slideArrowBtn}>
            <button
              onClick={() => changeBackgroundImage(currentImageIndex + 1)}
              className={slideStyles.slideBtn}
            >
              <img src={rightArrow} alt="" className={slideStyles.arrowSVG} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slideshow;
