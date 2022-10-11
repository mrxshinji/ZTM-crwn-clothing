import {CheckoutItemContainer, ImageContainer } from "./CheckoutItem.styles";

import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, reduceItemFromCart, removeItemFromCart} from '../../store/cart/cart.action'
import { selectCartItems } from "../../store/cart/cart.selector";

const CheckoutItem = ({ cartItem }) => {
  // cart item from parent from cart context
  const { name, quantity, imageUrl, price } = cartItem;

  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()
  // add qty
  const addProductToCart = () => dispatch(addItemToCart(cartItems, cartItem));
  // reduce qty
  const reduceProductFromCart = () => dispatch(reduceItemFromCart(cartItems, cartItem));
  // remove item
  const removeProductFromCart = () => dispatch(removeItemFromCart(cartItems, cartItem));

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
