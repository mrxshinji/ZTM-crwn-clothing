import {CheckoutContainer, CheckoutHeader, HeaderBlock, Total} from "./Checkout.styles.jsx";

import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import CheckoutItem from "../../components/CheckoutItem/CheckoutItem.components";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
      </CheckoutHeader>
        {cartItems.map((item) => {
          return <CheckoutItem key={item.id} cartItem={item} />;
        })}
      <Total>Total: ${cartTotal}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
