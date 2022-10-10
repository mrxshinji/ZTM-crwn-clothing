import {Button, BUTTON_TYPE_CLASSES} from '../Button/Button.components'
import {ProductCardContainer, Footer} from './ProductCard.styles'

import {CartContext} from '../../context/cart.context'
import { useContext } from 'react'

const ProductCard = ({ product }) => {
    const { name, price, imageUrl} = product;

    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);

    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`} />
            <Footer>
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to cart</Button>
        </ProductCardContainer>
    )
}

export default ProductCard;