import {CheckoutContainer, CheckoutHeader, HeaderBlock, Total} from "./Checkout.styles.jsx";

import CheckoutItem from "../../components/CheckoutItem/CheckoutItem.components";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector.js";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

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
