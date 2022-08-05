import { HeaderContainer } from './styles'

import LogoCoffeeDelivery from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <NavLink to="/">
          <img src={LogoCoffeeDelivery} alt="" />
        </NavLink>
        <nav>
          <div>
            <MapPin size={22} weight="fill" />
            <p>Porto Alegre, RS</p>
          </div>
          <NavLink to="/checkout">
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
        </nav>
      </div>
    </HeaderContainer>
  )
}
