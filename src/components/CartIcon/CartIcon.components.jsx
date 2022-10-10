
import {CartIconContainer, StyledShoppingIcon, ItemCount} from './CartIcon.styles.jsx'

import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'


const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen)
    }

    return (
        <CartIconContainer onClick={toggleCart}>
            <StyledShoppingIcon  />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;