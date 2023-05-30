import React from "react";
import navStyles from "../styling/navStyles.module.scss";
import facebookImg from "../assets/socialImages/facebookImg.svg";
import instagramImg from "../assets/socialImages/instagramImg.svg";
import searchImg from "../assets/socialImages/searchImg.svg";
import cartImg from "../assets/socialImages/cartImg.svg";

function Navbar() {
  return (
    <nav className={navStyles.navContainer}>
      <div className={navStyles.navTitle}>Debonair</div>
      <div className={navStyles.navUlWrapper}>
        <ul className={navStyles.navUl}>
          <button className={navStyles.navLink}>Home</button>
          <button className={navStyles.navLink}>Dermalocia</button>
          <button className={navStyles.navLink}>Haircare</button>
          <button className={navStyles.navLink}>Gift Vouchers</button>
          <button className={navStyles.navLink}>Price List</button>
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
    </nav>
  );
}

export default Navbar;
