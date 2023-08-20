import brandedStyles from "../../styling/BrandStyling.module.scss";
import { Link, useParams } from "react-router-dom";
import productData from "../../data/products.json";
import Navbar from "../global/Navbar";

const BrandedProducts = () => {
  const {category} = useParams();

  const filteredProducts = productData.products.filter(
    (product) => product.category === category
  );

  const uniqueBrands = [...new Set(filteredProducts.map((product) => product.brand))]
  return (
    <>
      <Navbar />
      <div className={brandedStyles.Wrapper}>
        <div className={brandedStyles.CardWrapper}>
          {uniqueBrands.map((brand) => (
          <div className={brandedStyles.CardHolder}>
            
              <>
              <div className={brandedStyles.Card} key={brand}>
                <img
                  src={`../assets/category/brands/${brand}.webp`}
                  alt="Brand Imgs"
                  className={brandedStyles.BrandImg}
                />
                <Link to={`${brand}`}>
                  <button className={brandedStyles.Btn}>{brand}</button>
                </Link>
              </div>
            </>
           
          </div> 
          ))}
        </div>
      </div>
    </>
  );
};

export default BrandedProducts;
