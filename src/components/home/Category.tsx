import React from "react";
import catStyles from "../../styling/categoryStyles.module.scss";
import haircare from "../../assets/category/haircare.webp";
import brunettehair from "../../assets/category/brunettehair.webp";
import dermotology from "../../assets/category/dermotology.webp";
import giftset from "../../assets/category/giftset.webp";
import blondehair from "../../assets/category/blondehair.webp";
import { Link } from "react-router-dom";

function Category() {
  return (
    <>
      <div className={catStyles.catContainer}>
        <div className={catStyles.cateBox}>
          <Link to={"/category/haircare"}>
            <div className={catStyles.catOption}>
              <img src={haircare} alt="" className={catStyles.catImg} />
              <button>Haircare</button>
            </div>
          </Link>
          <Link to={"/category/styling-products"}>
            <div className={catStyles.catOption} id={catStyles.stylingProduct}>
              <img src={brunettehair} alt="" className={catStyles.catImg} />
              <button>Styling Product</button>
            </div>
          </Link>
          <div className={catStyles.catOption} id={catStyles.beauty}>
            <img src={blondehair} alt="" className={catStyles.catImg} />
            <button>Beauty</button>
          </div>
          <Link to={"/category/dermalogica"}>
            <div className={catStyles.catOption} id={catStyles.dermotology}>
              <img src={dermotology} alt="" className={catStyles.catImg} />
              <button>Dermotology</button>
            </div>
          </Link>

          <div className={catStyles.catOption} id={catStyles.giftset}>
            <img src={giftset} alt="" className={catStyles.catImg} />
            <button>Gift Set</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
