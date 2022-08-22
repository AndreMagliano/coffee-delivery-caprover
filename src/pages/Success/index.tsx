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
              title={[
                {
                  type: 'normal',
                  text: 'Entrega em',
                },
                {
                  type: 'bold',
                  text: `${address.street}, ${address.number}`,
                },
              ]}
              subtitle={[
                {
                  type: 'normal',
                  text: `${address.complement} ${
                    address.complement ? '-' : ''
                  } ${address.city}, ${address.state}`,
                },
              ]}
            />
            <InfoCard
              icon={<Timer weight="fill" />}
              color={defaultTheme.yellow}
              title={[
                {
                  type: 'normal',
                  text: 'Previsão de entrega',
                },
              ]}
              subtitle={[
                {
                  type: 'bold',
                  text: '20 min - 30 min',
                },
              ]}
            />
            <InfoCard
              icon={<CurrencyDollar weight="fill" />}
              color={defaultTheme['yellow-dark']}
              title={[
                {
                  type: 'normal',
                  text: 'Pagamento na entrega',
                },
              ]}
              subtitle={[
                {
                  type: 'bold',
                  text: `${paymentMethod}`,
                },
              ]}
            />
          </OrderInfo>
        </Border>
      </DetailsContainer>
      <img src={Illustration} alt="" />
    </SuccessContainer>
  )
}
