import { NavLink } from 'react-router-dom'

import { ShoppingCart } from 'phosphor-react'
import { CartContainer } from './styles'

import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'

export function Cart() {
  const { cart } = useContext(CartContext)

  return (
    <CartContainer
      amountOfItemsInCart={cart.reduce((sum, item) => sum + item.amount, 0)}
    >
      <NavLink to="/checkout">
        <ShoppingCart size={22} weight="fill" />
      </NavLink>
    </CartContainer>
  )
}
