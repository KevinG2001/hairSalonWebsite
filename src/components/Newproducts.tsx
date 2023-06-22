import React from "react";
import productStyling from "../styling/productStyling.module.scss";
import productData from "../data/products.json";
import { Product } from "../types/producyTypes";

function filterProductsByDate(products: Product[]): Product[] {
  const currentDate = new Date();
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

  return products.filter((product: Product) => {
    const productDate = new Date(product.date);
    return productDate >= sixMonthsAgo && productDate <= currentDate;
  });
}

function Newproducts() {
  const filteredProducts = filterProductsByDate(productData.products);

  return (
    <>
      <div className={productStyling.nProductContainer}>
        <h2 className={productStyling.nProductContainerTitle}>
          <span>New</span> Products
        </h2>
        <div className={productStyling.nProductBox}>
          {filteredProducts.map((product) => (
            <div className={productStyling.nProductCard}>
              <img
                className={productStyling.nProductImg}
                src={product.image}
                alt=""
              />
              <div className={productStyling.nProductCardInfo}>
                <div className={productStyling.nProductTitle}>
                  {product.name}
                </div>
                <div className={productStyling.nProductPrice}>
                  €{product.price}
                </div>
                <div className={productStyling.nProductButtonHolder}>
                  <div className={productStyling.nProductLine}></div>
                  <button className={productStyling.nProductBtn}>
                    View Details
                  </button>
                  <div className={productStyling.nProductLine}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Newproducts;
