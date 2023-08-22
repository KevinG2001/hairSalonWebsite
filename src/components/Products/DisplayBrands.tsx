import Styles from "../../styling/BrandStyling.module.scss";
import { Link, useParams } from "react-router-dom";
import productData from "../../data/products.json";
import Navbar from "../global/Navbar";


// This component is used at the link website/category (category = whatever you clicked on dermalogica, haircare etc.)
const DisplayBrands = () => {
  const {category} = useParams();

  const filteredProducts = productData.products.filter(
    (product) => product.category === category
  );

  const uniqueBrands = [...new Set(filteredProducts.map((product) => product.brand))]
  return (
    <>
      <Navbar />
      <div className={Styles.Wrapper}>
        <div className={Styles.CardWrapper}>
          {uniqueBrands.map((brand) => (
          <div className={Styles.CardHolder}>
            
              <>
              <div className={Styles.Card} key={brand}>
                <img
                  src={`/src/assets/category/brands/${brand}.webp`}
                  alt="Img"
                  className={Styles.BrandImg}
                />
                <Link to={`${brand}`}>
                  <button className={Styles.Btn}>{brand}</button>
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

export default DisplayBrands;
