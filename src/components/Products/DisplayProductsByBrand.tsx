import brandedStyles from "../../styling/productStyling.module.scss";
import productData from "../../data/products.json";
import { Link, useParams } from "react-router-dom";
import Navbar from "../global/Navbar";

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
          <div className={brandedStyles.CardHolder}>
            {filteredProducts.map((product) => (
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
                    <Link
                      to={`/products/${product.name}`}
                      className={brandedStyles.ProductBtn}
                    >
                      View Details
                    </Link>
                    <div className={brandedStyles.Line}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayProducts;
