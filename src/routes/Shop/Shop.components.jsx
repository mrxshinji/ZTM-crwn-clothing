import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../CategoriesPreview/CategoriesPreview.components";
import Category from "../Category/Category.components";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils"
import { setCategories } from "../../store/categories/categories.action";

const Shop = () => {
  const dispatch = useDispatch();
  // GET CATEGORIES MAP
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments('categories');
      dispatch(setCategories(categoriesArray));
    };
    getCategoriesMap();
  }, [dispatch]); // NOT REQUIRED, it is to remove lint warnings

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path='/:category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
