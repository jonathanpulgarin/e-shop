import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { CartContext } from '../../contexts/cart.context';

import { CartIconConatainer, ShopIcon, ItemCount } from './cart-icon.styles.jsx'
import { UserContext } from '../../contexts/user.context';


const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartItemCount } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconConatainer onClick={toggleIsCartOpen}>
            <ShopIcon/>
            <ItemCount>{cartItemCount}</ItemCount>
        </CartIconConatainer>
    )
}

export default CartIcon;