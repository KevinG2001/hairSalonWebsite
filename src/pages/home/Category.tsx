import catStyles from "../../styling/categoryStyles.module.scss";
import productData from "../../data/products.json";
import { Link } from "react-router-dom";
import { Product } from "../../types/producyTypes";

function filterUniqueCategoryImgs(products: Product[]): { category: string, categoryImg: string }[] {
  const uniqueCategoryImgs = Array.from(
    new Set(products.map((product) => product.categoryImg))
  );

// function getCategoryImg(category: string) {
//   return new URL(`../../assets/category/${category}.webp`, import.meta.url).href;
// }


function Category() {
  const products = productData.products;
  const uniqueCategories = filterUniqueCategoryImgs(products);

  return (
    <>
      <div className={catStyles.catContainer}>
        <div className={catStyles.cateBox}>
          {uniqueCategories.map((category) => (
            <Link
              to={`${category}`}
              key={category}
              className={catStyles.catOption}
            >
              <img
                src={`../assets/category/${category}.webp`}
                alt="Category Image"
                className={catStyles.catImg}
              />
              <button>{category}</button>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Category;
