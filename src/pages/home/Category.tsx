import catStyles from "../../styling/categoryStyles.module.scss";
import productData from "../../data/products.json";
import { Link } from "react-router-dom";
import { Product } from "../../types/producyTypes";

function filterUniqueCategoryImgs(products: Product[]): { category: string, categoryImg: string }[] {
  const uniqueCategoryImgs = Array.from(
    new Set(products.map((product) => product.categoryImg))
  );

  // Create an array of objects with category and categoryImg
  return uniqueCategoryImgs.map((categoryImg) => {
    const productWithCategoryImg = products.find(product => product.categoryImg === categoryImg);
    return {
      category: productWithCategoryImg ? productWithCategoryImg.category : "",
      categoryImg: categoryImg
    };
  });
}

function Category() {
  const products = productData.products;
  const uniqueCategories = filterUniqueCategoryImgs(products);

  return (
    <>
      <div className={catStyles.catContainer}>
        <div className={catStyles.cateBox}>
          {uniqueCategories.map((category) => (
            <Link to={`${category}`} key={category.category}>
              <div className={catStyles.catOption} id={catStyles.giftset}>
                <img
                  src={category.categoryImg}
                  alt="Category Image"
                  className={catStyles.catImg}
                />
                <button>{category.category}</button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Category;
