import nProductStyles from "../../styling/productStyling.module.scss";
import productData from "../../data/products.json";
import { Link } from "react-router-dom";

const Newproducts = () => {
  return (
    <div className={nProductStyles.Container}>
      <h2 className={nProductStyles.nProductContainerTitle}>
        <span>All </span>Products
      </h2>
      <div className={nProductStyles.Wrapper}>
        <div className={nProductStyles.CardHolder}>
          {productData.products.map((product) => (
            <Link
              to={`/products/${product.name}`}
              className={nProductStyles.Card}
              key={product.id}
            >
              <img
                className={nProductStyles.ProductImg}
                src={product.image}
                alt="img"
              />
              <div className={nProductStyles.CardInfo}>
                <div className={nProductStyles.Title}>{product.name}</div>
                <div className={nProductStyles.Price}>€{product.price}</div>
                <div className={nProductStyles.BtnHolder}>
                  <div className={nProductStyles.Line}></div>
                  <div className={nProductStyles.ProductBtn}>View Details</div>
                  <div className={nProductStyles.Line}></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Newproducts;
