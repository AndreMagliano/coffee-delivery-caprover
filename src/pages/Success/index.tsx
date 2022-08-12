import { Border, DetailsContainer, OrderInfo, SuccessContainer } from './styles'

import Illustration from '../../assets/Illustration.svg'
import { InfoCard } from '../../components/InfoCard'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import { defaultTheme } from '../../styles/themes/default'

export function Success() {
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
                    Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                  </p>
                  <p>Farrapos - Porto Alegre, RS</p>
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
                  <strong>Cartão de Crédito</strong>
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
