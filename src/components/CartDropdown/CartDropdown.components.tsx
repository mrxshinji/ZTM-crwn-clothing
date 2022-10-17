import CartItem from "../CartItem/CartItem.components";
import { Button, BUTTON_TYPE_CLASSES } from "../Button/Button.components";

import {
  CartDropDownContainer,
  EmptyMessage,
  CartItems,
} from "./CartDropdown.styles";

import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux"
import { selectCartItems } from '../../store/cart/cart.selector'

const CartDropdown = () => {

  //navigate
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  const cartItems = useSelector(selectCartItems)

  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => {
            return <CartItem key={cartItem.id} cartItem={cartItem} />;
          })
        ) : (
          <EmptyMessage>Your cart is empty.</EmptyMessage>
        )}
      </CartItems>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={goToCheckoutHandler}
      >
        GO TO CHECKOUT
      </Button>
    </CartDropDownContainer>
  );
};

export default CartDropdown;
