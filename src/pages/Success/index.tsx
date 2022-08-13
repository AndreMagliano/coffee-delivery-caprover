import { Border, DetailsContainer, OrderInfo, SuccessContainer } from './styles'
import { defaultTheme } from '../../styles/themes/default'

import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { InfoCard } from '../../components/InfoCard'

import Illustration from '../../assets/Illustration.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Success() {
  const { address, paymentMethod } = useContext(CartContext)

  return (
    <SuccessContainer>
      <DetailsContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <Border>
          <OrderInfo>
            <InfoCard
              icon={<MapPin weight="fill" />}
              color={defaultTheme.purple}
              text={
                <div>
                  <p>
                    Entrega em{' '}
                    <strong>
                      {address.street}, {address.number}
                    </strong>
                  </p>
                  <p>
                    {address.complement} - {address.city}, {address.uf}
                  </p>
                </div>
              }
            />
            <InfoCard
              icon={<Timer weight="fill" />}
              color={defaultTheme.yellow}
              text={
                <div>
                  <p>Previsão de entrega</p>
                  <strong>20 min - 30 min</strong>
                </div>
              }
            />
            <InfoCard
              icon={<CurrencyDollar weight="fill" />}
              color={defaultTheme['yellow-dark']}
              text={
                <div>
                  <p>Pagamento na entrega</p>
                  <strong>{paymentMethod}</strong>
                </div>
              }
            />
          </OrderInfo>
        </Border>
      </DetailsContainer>
      <img src={Illustration} alt="" />
    </SuccessContainer>
  )
}
