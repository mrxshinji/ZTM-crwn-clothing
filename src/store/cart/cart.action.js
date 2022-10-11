import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";


// cart open states
export const setIsCartOpen = (CartOpenState) => {
  return createAction(CART_ACTION_TYPES.TOGGLE_CART_OPEN, CartOpenState);
};


// ==================== cart helpers function ====================
const addCartItem = (cartItems, productToAdd) => {
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
  const reduceCartItem = (cartItems, productToReduce) => {
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
  const removeCartItem = (cartItems, productToRemove) => {
    return cartItems.filter((item) => !(item.id === productToRemove.id));
  };

// ==================== cart helpers function ====================


// ==================== cart redux function ====================
export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
};

export const reduceItemFromCart = (cartItems, productToReduce) => {
  const newCartItems = reduceCartItem(cartItems, productToReduce);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
};

export const removeItemFromCart = (cartItems, productToRemove) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
};

// ==================== cart redux function ====================