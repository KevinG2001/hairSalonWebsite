import React from "react";
import catStyles from "../../styling/categoryStyles.module.scss";
import productData from "../../data/products.json";
import { Link } from "react-router-dom";
import { Product } from "../../types/producyTypes";

function filterUniqueCategorys(products: Product[]): string[] {
  const uniqueCategories = Array.from(
    new Set(products.map((product) => product.category))
  );
  return uniqueCategories;
}

function Category() {
  const products = productData.products;
  const uniqueCategories = filterUniqueCategorys(products);

  return (
    <>
      <div className={catStyles.catContainer}>
        <div className={catStyles.cateBox}>
          {uniqueCategories.map((category) => (
            <Link to={`/category/${category}`} key={category}>
              <div className={catStyles.catOption} id={catStyles.giftset}>
                <img
                  src={`/src/assets/category/${category}.webp`}
                  alt=""
                  className={catStyles.catImg}
                />
                <button>{category}</button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Category;
