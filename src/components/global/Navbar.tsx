import { useEffect, useState } from "react";
import navStyles from "../../styling/navStyles.module.scss";
import facebookImg from "../../assets/socialImages/facebookImg.svg";
import instagramImg from "../../assets/socialImages/instagramImg.svg";
import searchImg from "../../assets/socialImages/searchImg.svg";
import cartImg from "../../assets/socialImages/cartImg.svg";
import logo from "../../assets/debonair-logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [screenSize, setScreenSize] = useState(getDimension());

  const toggleBurgerMenu = () => {
    setIsOpen(!isOpen);
  };

  function getDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  return (
    <nav className={navStyles.navContainer}>
      <div className={navStyles.navTitle}>
        <Link to="/">
          <img src={logo} alt="" className={navStyles.navLogo} />
        </Link>
        <div className={navStyles.burgerMenu} onClick={toggleBurgerMenu}>
          <div
            className={`${navStyles.burgerLine} ${
              isOpen ? navStyles.activeLine1 : ""
            }`}
          ></div>
          <div
            className={`${navStyles.burgerLine} ${
              isOpen ? navStyles.activeLine2 : ""
            }`}
          ></div>
          <div
            className={`${navStyles.burgerLine} ${
              isOpen ? navStyles.activeLine3 : ""
            }`}
          ></div>
        </div>
      </div>
      <div
        className={`${navStyles.dropdown} ${
          isOpen ? navStyles.activeDropdown : ""
        }`}
      >
        <ul className={navStyles.navUl}>
          <Link to="/" className={navStyles.navLink}>
            Home
          </Link>
          <button className={navStyles.navLink}>Haircare</button>
          <button className={navStyles.navLink}>Gift Vouchers</button>
          <Link to="/services-price" className={navStyles.navLink}>
            Price List
          </Link>
          <Link to="/booking" className={navStyles.navLink}>
            Book Now
          </Link>
          <button className={navStyles.navLink}>Contact</button>
        </ul>
        {isOpen && (
          <div className={navStyles.navSocials}>
            <img src={facebookImg} alt="" className={navStyles.navSocailImg} />
            <img src={instagramImg} alt="" className={navStyles.navSocailImg} />
            <img src={searchImg} alt="" className={navStyles.navSocailImg} />
            <img src={cartImg} alt="" className={navStyles.navSocailImg} />
          </div>
        )}
      </div>
      {screenSize.width >= 960 ? (
        <div className={navStyles.navSocials}>
          {/* Social icons outside the dropdown will only render when dropdown is not active */}
          <img src={facebookImg} alt="" className={navStyles.navSocailImg} />
          <img src={instagramImg} alt="" className={navStyles.navSocailImg} />
          <img src={searchImg} alt="" className={navStyles.navSocailImg} />
          <img src={cartImg} alt="" className={navStyles.navSocailImg} />
        </div>
      ) : null}
    </nav>
  );
}

export default Navbar;
