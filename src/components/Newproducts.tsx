import React from 'react';
import productData from "../data/products.json";

interface Product {
  id: number;
  name: string;
  date: string;
  // Add any other properties present in your product data
}

function filterProductsByDate(products: Product[]): Product[] {
  const currentDate = new Date();
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

  return products.filter((product: Product) => {
    const productDate = new Date(product.date);
    return productDate >= sixMonthsAgo && productDate <= currentDate;
  });
}

function Newproducts() {
  const filteredProducts = filterProductsByDate(productData.products);

  return (
    <>
      <div>
        <h2>New Products</h2>
        <ul>
          {filteredProducts.map(product => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Newproducts;
