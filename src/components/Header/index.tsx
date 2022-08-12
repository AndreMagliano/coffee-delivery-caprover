import { NavLink } from 'react-router-dom'
import { MapPin } from 'phosphor-react'

import { HeaderContainer, LocaleContainer } from './styles'

import LogoCoffeeDelivery from '../../assets/Logo.svg'
import { Cart } from './components/Cart'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={LogoCoffeeDelivery} alt="" />
      </NavLink>
      <nav>
        <LocaleContainer>
          <MapPin size={22} weight="fill" />
          <p>Borborema, SP</p>
        </LocaleContainer>
        <Cart />
      </nav>
    </HeaderContainer>
  )
}
