import navStyles from "../../styling/navStyles.module.scss";
import facebookImg from "../../assets/socialImages/facebookImg.svg";
import instagramImg from "../../assets/socialImages/instagramImg.svg";
import searchImg from "../../assets/socialImages/searchImg.svg";
import cartImg from "../../assets/socialImages/cartImg.svg";
import logo from "../../assets/debonair-logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
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
 development
        <div
          className={`${navStyles.dropdown} ${
            isOpen ? navStyles.activeDropdown : ""
          }`}
        >
          <div className={navStyles.navUlWrapper}>
            <ul className={navStyles.navUl}>
              <Link to="/" className={navStyles.navLink}>
                Home
              </Link>
              <button className={navStyles.navLink}>Haircare</button>
              <button className={navStyles.navLink}>Gift Vouchers</button>
              <Link to="/services-price" className={navStyles.navLink}>
                Price List
              </Link>
              <button className={navStyles.navLink}>Book Now</button>
              <button className={navStyles.navLink}>Contact</button>
            </ul>
          </div>
          <div className={navStyles.navSocials}>
            <img src={facebookImg} alt="" className={navStyles.navSocailImg} />
            <img src={instagramImg} alt="" className={navStyles.navSocailImg} />
            <img src={searchImg} alt="" className={navStyles.navSocailImg} />
            <img src={cartImg} alt="" className={navStyles.navSocailImg} />
          </div>

        <div className={navStyles.navUlWrapper}>
          <ul className={navStyles.navUl}>
            <Link to="/" className={navStyles.navLink}>
              Home
            </Link>
            <button className={navStyles.navLink}>Haircare</button>
            <button className={navStyles.navLink}>Gift Vouchers</button>
            <Link to="/services-price" className={navStyles.navLink}>
              Price List
            </Link>
            <button className={navStyles.navLink}>Book Now</button>
            <button className={navStyles.navLink}>Contact</button>
          </ul>
        </div>
        <div className={navStyles.navSocials}>
          <img src={facebookImg} alt="" className={navStyles.navSocailImg} />
          <img src={instagramImg} alt="" className={navStyles.navSocailImg} />
          <img src={searchImg} alt="" className={navStyles.navSocailImg} />
          <img src={cartImg} alt="" className={navStyles.navSocailImg} />
 deployment
        </div>
      </nav>
    </>
  );
}

export default Navbar;
