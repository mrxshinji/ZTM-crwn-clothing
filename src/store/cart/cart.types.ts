import { CategoryItem } from "../categories/categories.types";

export enum CART_ACTION_TYPES {
    // UPDATE_CART_ITEMS: "UPDATE_CART_ITEMS",
    TOGGLE_CART_OPEN= "TOGGLE_CART_OPEN",
    SET_CART_ITEMS= 'cart/SET_CART_ITEMS',
    SET_CART_COUNTS= 'cart/SET_CART_COUNTS',
    SET_CART_TOTAL= 'cart/SET_CART_TOTAL'

  };

// export type CartItem = {
//   id: Number,
//   name: string,
//   imageUrl: string,
//   price: Number,
//   quantity: number ,
// }

export type CartItemTypes = CategoryItem & {
  quantity: number;
}