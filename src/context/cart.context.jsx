import { createContext, useState, useEffect } from "react";

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

const removeCartItem = (cartItems, productToRemove) => {
  return cartItems.filter((item) => !(item.id === productToRemove.id));
};

// value to access
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  reduceItemFromCart: () => {},
  removeItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    const newCartCount = cartItems.reduce((sum, cartItem) => {
      return sum += cartItem.quantity;
    }, 0);
    setCartCount(newCartCount)
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce((sum, cartItem) => {
      return sum += cartItem.quantity * cartItem.price;
    }, 0);
    setCartTotal(newCartTotal)
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const reduceItemFromCart = (productToReduce) => {
    setCartItems(reduceCartItem(cartItems, productToReduce));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    reduceItemFromCart,
    removeItemFromCart,
    cartCount,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
