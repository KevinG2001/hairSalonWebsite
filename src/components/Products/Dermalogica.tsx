import React from "react";
import BrandStyling from "../../styling/brandStyling.module.scss";
import Navbar from "../global/Navbar";
import productData from "../../data/products.json";
import { Product } from "../../types/producyTypes";
import { Link, useParams } from "react-router-dom";

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
  const { category } = useParams();
  const dermalogicaProducts = productData.products;
  const dermalogicaBrands = filterProductsByBrand(dermalogicaProducts);

  return (
    <>
      <Navbar />
      <div className={BrandStyling.Wrapper}>
        <div className={BrandStyling.CardWrapper}>
          {dermalogicaBrands.map((brand) => (
            <>
              <div className={BrandStyling.Card} key={brand.id}>
                <img
                  src={`/src/assets/category/brands/${brand}.webp`}
                  alt="Img"
                  className={BrandStyling.BrandImg}
                />
                <Link to={`/category/${category}/${brand}`}>
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

export default Dermalgocia;
