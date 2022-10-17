import { CART_ACTION_TYPES, CartItemTypes } from "./cart.types";
import { CategoryItem } from "../categories/categories.types";
import {
  createAction,
  ActionWithPayload,
  withMatcher,
} from "../../utils/reducer/reducer.utils";

// cart open states

export type SetIsCartOpen = ActionWithPayload<
  CART_ACTION_TYPES.TOGGLE_CART_OPEN,
  boolean
>;

export const setIsCartOpen = withMatcher(
  (isCartOpen: boolean): SetIsCartOpen => {
    return createAction(CART_ACTION_TYPES.TOGGLE_CART_OPEN, isCartOpen);
  }
);

// ==================== cart helpers function ====================
const addCartItem = (
  cartItems: CartItemTypes[],
  productToAdd: CategoryItem
): CartItemTypes[] => {
  // check if products inside cart Items,
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  // if exits
  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }
  // return new array with modified cartItems/ cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

// reduce cart item
const reduceCartItem = (
  cartItems: CartItemTypes[],
  productToReduce: CartItemTypes
): CartItemTypes[] => {
  // reduce quantity
  const newCart = cartItems.map((cartItem) => {
    return cartItem.id === productToReduce.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem;
  });
  // return after remove item when quantity reach 0
  return newCart.filter((item) => !(item.quantity === 0));
};

//  remove cart item
const removeCartItem = (
  cartItems: CartItemTypes[],
  productToRemove: CartItemTypes
): CartItemTypes[] => {
  return cartItems.filter((item) => !(item.id === productToRemove.id));
};

// ==================== cart helpers function ====================

// ==================== cart redux function ====================

export type SetItemToCart = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItemTypes[]
>;

export const setCartItems = withMatcher(
  (cartItems: CartItemTypes[]): SetItemToCart =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

export const addItemToCart = (
  cartItems: CartItemTypes[],
  productToAdd: CategoryItem
): SetItemToCart => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};

export const reduceItemFromCart = (
  cartItems: CartItemTypes[],
  productToReduce: CartItemTypes
): SetItemToCart => {
  const newCartItems = reduceCartItem(cartItems, productToReduce);
  return setCartItems(newCartItems);
};

export const removeItemFromCart = (
  cartItems: CartItemTypes[],
  productToRemove: CartItemTypes
): SetItemToCart => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return setCartItems(newCartItems);
};

// ==================== cart redux function ====================
