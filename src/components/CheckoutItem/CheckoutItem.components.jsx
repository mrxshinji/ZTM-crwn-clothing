import {CheckoutItemContainer, ImageContainer } from "./CheckoutItem.styles";

import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const CheckoutItem = ({ cartItem }) => {
  // cart item from parent from cart context
  const { name, quantity, imageUrl, price } = cartItem;

  //cart context
  const { addItemToCart, reduceItemFromCart, removeItemFromCart } =
    useContext(CartContext);
  // add qty
  const addProductToCart = () => addItemToCart(cartItem);
  // reduce qty
  const reduceProductFromCart = () => reduceItemFromCart(cartItem);
  // remove item
  const removeProductFromCart = () => removeItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={reduceProductFromCart}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className='arrow' onClick={addProductToCart}>&#10095;</div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={removeProductFromCart}>
        &#10005;
      </div>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
