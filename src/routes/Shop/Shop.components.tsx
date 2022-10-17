import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../CategoriesPreview/CategoriesPreview.components";
import Category from "../Category/Category.components";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategoriesStart } from "../../store/categories/categories.action";

const Shop = () => {
  const dispatch = useDispatch();
  // GET CATEGORIES MAP
  useEffect(() => {
   dispatch(fetchCategoriesStart())
  }, [dispatch]); // NOT REQUIRED, it is to remove lint warnings

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path='/:category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
