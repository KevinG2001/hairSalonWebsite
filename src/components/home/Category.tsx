import React from "react";
import catStyles from "../../styling/categoryStyles.module.scss";
import haircare from "../../assets/category/haircare.webp"
import brunettehair from "../../assets/category/brunettehair.webp"
import dermotology from "../../assets/category/dermotology.webp"
import giftset from "../../assets/category/giftset.webp"
import blondehair from "../../assets/category/blondehair.webp"

function Category() {
  return (
    <>
      <div className={catStyles.catContainer}>
        <div className={catStyles.cateBox}>
          <div className={catStyles.catOption}>
            <img src={haircare} alt="" className={catStyles.catImg}/>
            <button >Haircare</button>
          </div>
          <div className={catStyles.catOption} id={catStyles.stylingProduct}>
            <img src={brunettehair} alt="" className={catStyles.catImg}/>
            <button >Styling Product</button>
          </div>
          <div className={catStyles.catOption} id={catStyles.beauty}>
            <img src={blondehair} alt="" className={catStyles.catImg}/>
            <button >Beauty</button>
          </div>
          <div className={catStyles.catOption} id={catStyles.dermotology}>
            <img src={dermotology} alt="" className={catStyles.catImg}/>
            <button >Dermotology</button>
          </div>
          <div className={catStyles.catOption} id={catStyles.giftset}>
            <img src={giftset} alt="" className={catStyles.catImg}/>
            <button >Gift Set</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
