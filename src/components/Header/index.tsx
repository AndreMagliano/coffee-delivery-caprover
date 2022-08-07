import { HeaderContainer, HeaderContent, LocaleContainer } from './styles'

import LogoCoffeeDelivery from '../../assets/Logo.svg'
import { MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { Cart } from './components/Cart'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to="/">
          <img src={LogoCoffeeDelivery} alt="" />
        </NavLink>
        <nav>
          <LocaleContainer>
            <MapPin size={22} weight="fill" />
            <p>Porto Alegre, RS</p>
          </LocaleContainer>
          <Cart />
        </nav>
      </HeaderContent>
    </HeaderContainer>
  )
}
