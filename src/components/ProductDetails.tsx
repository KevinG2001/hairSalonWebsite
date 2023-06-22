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
              <div>
                <h2>{product.name}</h2>
                <p>Price: €{product.price}</p>
                <p>Quanity</p>
                <button>+</button>
                <button>0</button>
                <button>-</button>
                <button>Add To Card</button>
                <div className={productDetailStyling.description}>
                  <div className={productDetailStyling.line}></div>
                  <div className={productDetailStyling.descriptionTitle}>
                    Product Description
                  </div>
                  <div className={productDetailStyling.line}></div>
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
