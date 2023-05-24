import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import { CheckoutItemContainer, CheckoutImageContainer, ChekoutImg, NamePrice, Quantity, Arrow, Value, RemoveButton } from './checkout-item.styles.jsx';

const CheckoutItem = ({ cartItem }) => {
    const { removeItemFromCart, addItemToCart, clearItemFromCart } = useContext(CartContext);
    const { name, imageUrl, price, quantity } = cartItem;

    const increaseQuantity = () => {
        addItemToCart(cartItem)
    }

    const decreaseQuantity = () => {
        removeItemFromCart(cartItem)
    }

    const removeItem = () => {
        clearItemFromCart(cartItem)
    }

    return (
        <CheckoutItemContainer>
            <CheckoutImageContainer>
                <ChekoutImg src={imageUrl} alt={`${name}`} />
            </CheckoutImageContainer>
            <NamePrice>{name}</NamePrice>
            <Quantity>
                <Arrow onClick={decreaseQuantity}>
                    &#10094;
                </Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={increaseQuantity}>
                    &#10095;
                </Arrow>
            </Quantity>
            <NamePrice>{price * quantity}</NamePrice>
            <RemoveButton onClick={removeItem}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem;