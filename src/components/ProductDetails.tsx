import React from "react";
import { useParams } from "react-router-dom";
import productData from "../data/products.json";
import productDetailStyling from "../styling/productDetailsStyling.module.scss";
import Navbar from "./global/Navbar";

const ProductDetails = () => {
  const { productname } = useParams();
  const product = productData.products.find(
    (product) => product.name === productname
  );

  return (
    <>
      <Navbar />
      <div className={productDetailStyling.detailWrapper}>
        {product && (
          <>
            <img src={product.image} alt="" />
            <div className={productDetailStyling.detailContainer}>
              <div className={productDetailStyling.productHeading}>
                <h2>{product.name}</h2>
              </div>
              <div className={productDetailStyling.productPrice}>
                  € {product.price}
              </div>
              <div className={productDetailStyling.productCartOptions}>
                <span className={productDetailStyling.productSpan}>Quantity:</span>
                <div className={productDetailStyling.quantitySelector}>
                  <button className={productDetailStyling.selectorBtn}>-</button>
                  <button className={productDetailStyling.selectorBtn}>0</button>
                  <button className={productDetailStyling.selectorBtn}>+</button>
                  {product.quantity <= 0 ? (
                    <p>The product is out of stock </p>
                  ) : (
                    <button className={productDetailStyling.addBtn}>Add to cart</button>
                  )}
                </div>
    
                <div className={productDetailStyling.descriptionBreaker}>
                  <div className={productDetailStyling.Line}></div>
                  <div className={productDetailStyling.descriptionTitle}>product description</div>
                  <div className={productDetailStyling.Line}></div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
