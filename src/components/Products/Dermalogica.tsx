import React from "react";
import BrandStyling from "../../styling/brandStyling.module.scss";
import Navbar from "../global/Navbar";
import productData from "../../data/products.json";
import { Product } from "../../types/producyTypes";

function filterProductsByBrand(products: Product[]): Product[] {
  const dermalogicaProducts = products.filter(
    (product) => product.category === "dermalogica"
  );

  const uniqueBrands = Array.from(
    new Set(dermalogicaProducts.map((product) => product.brand))
  );

  return uniqueBrands;
}

function Dermalgocia() {
  const dermalogicaProducts = productData.products;
  const dermalogicaBrands = filterProductsByBrand(dermalogicaProducts);

  return (
    <>
      <Navbar />
      <div className={BrandStyling.Wrapper}>
        {dermalogicaBrands.map((brand) => (
          <>
            <div>{brand}</div>
          </>
        ))}
      </div>
    </>
  );
}

export default Dermalgocia;
