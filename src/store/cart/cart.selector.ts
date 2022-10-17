import { createSelector } from "reselect";
import { CartStates } from "./cart.reducer";

import { RootState } from "../store";

const selectCartReducer = (state: RootState): CartStates => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => {
    return cart.cartItems;
  }
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => {
    return cart.isCartOpen;
  }
);

export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce((sum, cartItem) => (sum += cartItem.quantity), 0);
  }
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce(
      (sum, cartItem) => (sum += cartItem.quantity * cartItem.price),
      0
    );
  }
);
