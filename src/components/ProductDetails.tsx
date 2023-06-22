import React from "react";
import { useParams } from "react-router-dom";
import productData from "../data/products.json";

const ProductDetails = () => {
  const { productname } = useParams();
  const product = productData.products.find(
    (product) => product.name === productname
  );

  return (
    <div>
      <h1>Product Details</h1>
      {product && (
        <div>
          <h2>{product.name}</h2>
          <p>Price: €{product.price}</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
