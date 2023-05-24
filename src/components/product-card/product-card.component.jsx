import { useContext } from 'react';

import { ProductCardContainer, ProductCardImage, Footer, FooterName, FooterPrice } from './product-card.styles.jsx';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { CartContext } from '../../contexts/cart.context';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => {
        addItemToCart(product)
    }
    
    return (
        <ProductCardContainer>
            <ProductCardImage src={imageUrl} alt={`${name}`}/>
            <Footer>
                <FooterName>{ name }</FooterName>
                <FooterPrice>{ price }</FooterPrice>
            </Footer>
            <Button buttonType={ BUTTON_TYPE_CLASSES.inverted } onClick={addProductToCart}>Add to cart</Button>

        </ProductCardContainer>
    )
}

export default ProductCard;