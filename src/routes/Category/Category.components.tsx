import { CategoryContainer, CategoryTitle } from "./Category.styles";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// import { CategoriesContext } from "../../context/categories.context";

import ProductCard from "../../components/ProductCard/ProductCard.components";
import Spinner from "../../components/Spinner/Spinner.components";

import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/categories.selector";

type CategoryRouteParams = {
  category: string
}

const Category = () => {
  // const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);
  const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;
  const [products, setProducts] = useState(categoriesMap[category]);
  const isLoading = useSelector(selectCategoriesIsLoading);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </>
  );
};

export default Category;
