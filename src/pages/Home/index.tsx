import { useContext } from 'react'

import {
  HomeContainer,
  IntroContent,
  CoffeeList,
  Cards,
  CoffeeContainer,
} from './styles'

import BannerImg from '../../assets/Banner.svg'

import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { InfoCard } from '../../components/InfoCard'

import { defaultTheme } from '../../styles/themes/default'
import { CoffeeCard } from '../../components/CoffeeCard'

import { CartContext } from '../../contexts/CartContext'

export function Home() {
  const { coffees } = useContext(CartContext)

  return (
    <HomeContainer>
      <IntroContent>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <Cards>
            <InfoCard
              icon={<ShoppingCart size={16} weight="fill" />}
              color={defaultTheme['yellow-dark']}
              text="Compra simples e segura"
            />
            <InfoCard
              icon={<Package size={16} weight="fill" />}
              color={defaultTheme['base-text']}
              text="Embalagem mantém o café intacto"
            />
            <InfoCard
              icon={<Timer size={16} weight="fill" />}
              color={defaultTheme.yellow}
              text="Entrega rápida e rastreada"
            />
            <InfoCard
              icon={<Coffee size={16} weight="fill" />}
              color={defaultTheme.purple}
              text="O café chega fresquinho até você"
            />
          </Cards>
        </div>
        <img src={BannerImg} alt="" />
      </IntroContent>
      <CoffeeContainer>
        <h2>Nossos cafés</h2>
        <CoffeeList>
          {coffees.map((coffee) => {
            return (
              <CoffeeCard
                key={coffee.id}
                id={coffee.id}
                name={coffee.name}
                tags={coffee.tags}
                price={coffee.price}
                image={coffee.image}
                description={coffee.description}
              />
            )
          })}
        </CoffeeList>
      </CoffeeContainer>
    </HomeContainer>
  )
}
