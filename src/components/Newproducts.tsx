import React from "react";
import nProductStyles from "../styling/newproducts.module.scss";
import productData from "../data/products.json";

const Newproducts = () => {
  return (
    <div className={nProductStyles.nProductContainer}>
      <div className={nProductStyles.nProductBox}>
      <h2 className={nProductStyles.nProductContainerTitle}>NewProducts</h2>
      <div className={nProductStyles.nProductCardHolder}>
        {productData.products.map((product) => (
          <div className={nProductStyles.nProductCard} key={product.id}>
            <img className={nProductStyles.nProductImg} src={product.image} alt="img" />
            <div className={nProductStyles.nProductTitle}>{product.name}</div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Newproducts;
