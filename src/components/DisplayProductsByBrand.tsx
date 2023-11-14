import brandedStyles from "../styling/productStyling.module.scss";
import productData from "./../data/products.json";
import { Link, useParams } from "react-router-dom";
import Navbar from "./global/Navbar";

// This component displays the products at the link of website/category/brand (brand being what ever you clicked on).
// It goes by brand, It only shows the products by brand

const DisplayProducts = () => {
  const { brand } = useParams();
  const filteredProducts = productData.products.filter(
    (product) => product.brand === brand
  );

  return (
    <>
      <Navbar />
      <div className={brandedStyles.Container}>
        <div className={brandedStyles.Wrapper}>
          {filteredProducts.map((product) => (
            <Link
              to={`/products/${product.name}`}
              className={brandedStyles.CardHolder}
            >
              <div className={brandedStyles.Card} key={product.id}>
                <img
                  src={product.image}
                  alt=""
                  className={brandedStyles.ProductImg}
                />
                <div className={brandedStyles.CardInfo}>
                  <div className={brandedStyles.Name}>{product.name}</div>
                  <div className={brandedStyles.Price}>€{product.price}</div>
                  <div className={brandedStyles.BtnHolder}>
                    <div className={brandedStyles.Line}></div>
                    <div className={brandedStyles.details}>View Details</div>
                    <div className={brandedStyles.Line}></div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayProducts;
