import {CheckoutItemContainer, ImageContainer, BaseSpan, Quantity, Arrow, Value, RemoveButton} from './checkout-item.styles';

import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({cartItem}) => {
    const {clearItemFromCart,addItemToCart, removeItemFromCart}= useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(cartItem);

    const incrementItemHandler = () => addItemToCart(cartItem);

    const decrementItemHandler = () => removeItemFromCart(cartItem);

    const {name, imageUrl, quantity, price} = cartItem;
  return (
    <CheckoutItemContainer>
        <ImageContainer>
            <img src={imageUrl} alt={`${name}`}/>
        </ImageContainer>
        <BaseSpan>{name}</BaseSpan>
        <Quantity>
          <Arrow onClick={decrementItemHandler}>&#10094;</Arrow>
          <Value>{quantity}</Value>
          <Arrow onClick={incrementItemHandler}>
            &#10095;
          </Arrow>
        </Quantity>
        <BaseSpan>{price}</BaseSpan>
        <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem