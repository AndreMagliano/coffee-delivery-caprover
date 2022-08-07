import { ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { CartContainer } from './styles'

export function Cart() {
  return (
    <CartContainer>
      <NavLink to="/checkout">
        <ShoppingCart size={22} weight="fill" />
      </NavLink>
    </CartContainer>
  )
}
