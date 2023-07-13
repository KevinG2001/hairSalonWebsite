import React from "react";
import productStyling from "../../styling/productStyling.module.scss";
import productData from "../../data/products.json";
import { Product } from "../../types/producyTypes";
import { Link } from "react-router-dom";

//Function that shows the products that were adding in the last 6 months

// function filterProductsByDate(products: Product[]): Product[] {
//   const currentDate = new Date();
//   const sixMonthsAgo = new Date();
//   sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

//   return products.filter((product: Product) => {
//     const productDate = new Date(product.date);
//     return productDate >= sixMonthsAgo && productDate <= currentDate;
//   });
// }

//Function only shows the last 8 products in the json array
function filterByLastEigthProducts(products: Product[]): Product[] {
  const lastProductIndex = productData.products.length-1; //Variable to get the last index
  const startIndex = Math.max(lastProductIndex - 7, 0); //Variable to get the starting index

  return products.slice(startIndex, lastProductIndex + 1);
}

function Newproducts() {
  const filteredProducts = filterByLastEigthProducts(productData.products);
  //variable for the filteredProducts using the data from the function

  return (
    <>
      <div className={productStyling.nProductContainer}>
        <h2 className={productStyling.nProductContainerTitle}>
          <span>New</span> Products
        </h2>
        <div className={productStyling.nProductBox}>
          {filteredProducts.map((product) => ( //Mapsthrough the filtered products
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
                  <Link
                    to={`/products/${product.name}`}
                    className={productStyling.nProductBtn}
                  >
                    View Details
                  </Link>
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
