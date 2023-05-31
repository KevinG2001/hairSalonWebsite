import React from "react";
import catStyles from "../styling/categoryStyles.module.scss";

function Category() {
  return (
    <>
      <div className={catStyles.catContainer}>
        <div className={catStyles.cateBox}>
          <div className={catStyles.catOption}>
            <button>Haircare</button>
          </div>
          <div className={catStyles.catOption}>
            <button>Styling Product</button>
          </div>
          <div className={catStyles.catOption}>
            <button>Beauty</button>
          </div>
          <div className={catStyles.catOption}>
            <button>Dermotology</button>
          </div>
          <div className={catStyles.catOption}>
            <button>Gift Set</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
