import React from "react";
import nProductStyles from "../styling/productStyling.module.scss";
import productData from "../data/products.json";
import { Product } from "../types/producyTypes.ts";
import { Link } from "react-router-dom";

const Newproducts = () => {
  return (
    <div className={nProductStyles.nProductContainer}>
      <h2 className={nProductStyles.nProductContainerTitle}>
        <span>All </span>Products
      </h2>
      <div className={nProductStyles.nProductBox}>
        <div className={nProductStyles.nProductCardHolder}>
          {productData.products.map((product) => (
            <div className={nProductStyles.nProductCard} key={product.id}>
              <img
                className={nProductStyles.nProductImg}
                src={product.image}
                alt="img"
              />
              <div className={nProductStyles.nProductCardInfo}>
                <div className={nProductStyles.nProductTitle}>
                  {product.name}
                </div>
                <div className={nProductStyles.nProductPrice}>
                  €{product.price}
                </div>
                <div className={nProductStyles.nProductButtonHolder}>
                  <div className={nProductStyles.nProductLine}></div>
                  <Link
                    to={`/products/${product.name}`}
                    className={nProductStyles.nProductBtn}
                  >
                    View Details
                  </Link>
                  <div className={nProductStyles.nProductLine}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Newproducts;
