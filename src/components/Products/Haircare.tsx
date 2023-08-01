import React from "react";
import BrandStyling from "../../styling/brandStyling.module.scss";
import Navbar from "../global/Navbar";
import productData from "../../data/products.json";
import { Product } from "../../types/producyTypes";
import { Link } from "react-router-dom";

function filterProductsByBrand(products: Product[]): Product[] {
  const haircareProducts = products.filter(
    (product) => product.category === "Haircare"
  );

  const uniqueBrands = Array.from(
    new Set(haircareProducts.map((product) => product.brand))
  );

  return uniqueBrands;
}

function Haircare() {
  const haircareProducts = productData.products;
  const haircareBrands = filterProductsByBrand(haircareProducts);

  return (
    <>
      <Navbar />
      <div className={BrandStyling.Wrapper}>
        <div className={BrandStyling.CardWrapper}>
          {haircareBrands.map((brand) => (
            <>
              <div className={BrandStyling.Card} key={brand.id}>
                <img
                  src={`/src/assets/category/brands/${brand}.webp`}
                  alt="Img"
                  className={BrandStyling.BrandImg}
                />
                <Link to={`/category/${brand}`}>
                  <button className={BrandStyling.Btn}>{brand}</button>
                </Link>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Haircare;
