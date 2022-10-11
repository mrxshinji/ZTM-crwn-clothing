import { combineReducers } from "redux";

// reducer
import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/categories.reducer"
import { cartReducer } from "./cart/cart.reducer";

// object to combine all reducers
export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
    cart : cartReducer,
});
