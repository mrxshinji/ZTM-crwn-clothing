import { CartItemContainer, ItemDetails } from "./CartItem.styles";

import { CartItemTypes } from "../../store/cart/cart.types";


type CartItemProps = {
  cartItem: CartItemTypes
}

const CartItem = ({ cartItem }: CartItemProps) => {
  const { name, quantity, imageUrl, price } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
