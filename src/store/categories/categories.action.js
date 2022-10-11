import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./categories.types";

export const setCategories = (categoriesArray) => {
  return createAction(
    CATEGORIES_ACTION_TYPES.GET_CATEGORIES,
    categoriesArray
  );
};
