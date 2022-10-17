// import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES, Category } from "./categories.types";

// type
export type FetchCategoriesStart =
  Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccess = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
  Category[]
>;

export type FetchCategoriesFailed = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
  Error
>;

// type

export const fetchCategoriesStart = withMatcher((): FetchCategoriesStart => {
  return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
});

export const fetchCategoriesSuccess = withMatcher(
  (categoriesArray: Category[]): FetchCategoriesSuccess => {
    return createAction(
      CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
      categoriesArray
    );
  }
);

export const fetchCategoriesFailed = withMatcher(
  (err: Error): FetchCategoriesFailed => {
    return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, err);
  }
);

// export const fetchCategoriesAsync = () => async (dispatch) => {
//   dispatch(fetchCategoriesStart())
//   try {
//     const categoriesArray = await getCategoriesAndDocuments('categories');
//     dispatch(fetchCategoriesSuccess(categoriesArray));
//   } catch (err) {
//     dispatch(fetchCategoriesFailed(err))
//   }
// };
