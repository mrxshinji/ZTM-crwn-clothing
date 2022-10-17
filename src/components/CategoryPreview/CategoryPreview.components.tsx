
import ProductCard from "../ProductCard/ProductCard.components";
import {CategoryPreviewContainer, TitleLink, Preview} from "./CategoryPreview.styles";

import { CategoryItem } from "../../store/categories/categories.types";

type CategorPreviewProps = {
  title: string,
  products: CategoryItem[]
}

const CategoryPreview = ({ title, products }:CategorPreviewProps) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <TitleLink to={`/shop/${title}`} >
          {title.toUpperCase()}
        </TitleLink>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
}

export default CategoryPreview;
