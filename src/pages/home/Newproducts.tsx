import productStyling from "../../styling/productStyling.module.scss";
import productData from "../../data/products.json";
import { Product } from "../../types/producyTypes";
import { Link } from "react-router-dom";

function filterByLastEigthProducts(products: Product[]): Product[] {
  const lastProductIndex = productData.products.length - 1; //Variable to get the last index
  const startIndex = Math.max(lastProductIndex - 7, 0); //Variable to get the starting index

  return products.slice(startIndex, lastProductIndex + 1);
}

function Newproducts() {
  const filteredProducts = filterByLastEigthProducts(productData.products);
  //variable for the filteredProducts using the data from the function

  return (
    <>
      <div className={productStyling.Container}>
        <h2 className={productStyling.nProductContainerTitle}>
          <span>New</span> Products
        </h2>
        <div className={productStyling.Wrapper}>
          {filteredProducts.map(
            (
              product //Mapsthrough the filtered products
            ) => (
              <Link
                to={`/products/${product.name}`}
                className={productStyling.Card}
                key={product.id}
              >
                <img
                  className={productStyling.ProductImg}
                  src={product.image}
                  alt=""
                />
                <div className={productStyling.CardInfo}>
                  <div className={productStyling.Title}>{product.name}</div>
                  <div className={productStyling.Price}>€{product.price}</div>
                  <div className={productStyling.BtnHolder}>
                    <div className={productStyling.Line}></div>
                    <div className={productStyling.ProductBtn}>
                      View Details
                    </div>
                    <div className={productStyling.Line}></div>
                  </div>
                </div>
              </Link>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default Newproducts;
