import { CartItemContainer, CartImg, ItemDetails, NameSpan } from './cart-item.styles.jsx';

const CartItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CartItemContainer>
            <CartImg src={imageUrl} alt={`${name}`} />
            <ItemDetails>
                <NameSpan>{name}</NameSpan>
                <span>{quantity} x ${price}</span>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem;