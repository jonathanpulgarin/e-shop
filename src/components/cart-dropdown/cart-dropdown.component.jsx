import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';


import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartDropdownContainer, EmptyMessage, CartItemsContainer } from './cart-dropdown.styles.jsx';

const CartDropDown = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {
                    cartItems.length ? (cartItems.map((item) => (
                        <CartItem key={item.id} cartItem={item}/>
                    ))) : (
                        <EmptyMessage>Your cart is empty</EmptyMessage>
                    )
                }
                
            </CartItemsContainer>
            <Link to='/checkout'>
                <Button>GO TO CHECKOUT</Button>
            </Link>
        </CartDropdownContainer>
    )
}

export default CartDropDown;