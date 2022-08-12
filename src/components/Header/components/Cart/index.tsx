import { NavLink } from 'react-router-dom'

import { ShoppingCart } from 'phosphor-react'
import { CartContainer } from './styles'

export function Cart() {
  return (
    <CartContainer amountOfItemsInCart={0}>
      <NavLink to="/checkout">
        <ShoppingCart size={22} weight="fill" />
      </NavLink>
    </CartContainer>
  )
}
