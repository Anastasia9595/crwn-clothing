import Button from '../button/button.component'

import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'

import {useNavigate} from 'react-router-dom'

import CartItem from '../cart-item/cart-item.component'

import {CartdropdownContainer, EmptyMessage, CartItems} from './cart-dropdown.styles'


const CartDropDown = () => {
  const {cartItems, isCartOpen, setIsCartOpen} = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
    setIsCartOpen(!isCartOpen);
  }

  return (
    <CartdropdownContainer>
        <CartItems>
          {
            cartItems.length ? 
            
            (cartItems.map(item => <CartItem key={item.id} cartItem={item} />)): <EmptyMessage>Your cart is empty </EmptyMessage>
          }
          
        </CartItems>
        <Button onClick={handleCheckout}>Go to Checkout</Button>
        
    </CartdropdownContainer>
  )
}

export default CartDropDown