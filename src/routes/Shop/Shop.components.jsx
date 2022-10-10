import {  Routes, Route } from 'react-router-dom'

import CategoriesPreview from '../CategoriesPreview/CategoriesPreview.components';
import Category from '../Category/Category.components';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path='/:category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
