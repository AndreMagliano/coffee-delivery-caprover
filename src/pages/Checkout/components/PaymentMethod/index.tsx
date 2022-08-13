import { useContext } from 'react'

import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'

import { CartContext } from '../../../../contexts/CartContext'
import { Select } from '../Select'

import { Info, Payment, SelectContainer } from './styles'

export function PaymentMethod() {
  const { paymentMethod, changePaymentMethod } = useContext(CartContext)

  function handleChangePaymentMethod(method: string) {
    changePaymentMethod(method)
  }

  return (
    <Payment>
      <Info>
        <CurrencyDollar size={22} />
        <div>
          <strong>Pagamento</strong>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </Info>
      <SelectContainer>
        <Select
          icon={<CreditCard size={16} />}
          label={'Cartão de crédito'}
          selected={paymentMethod === 'Cartão de crédito'}
          onClick={() => handleChangePaymentMethod('Cartão de crédito')}
        />
        <Select
          icon={<Bank size={16} />}
          label={'cartão de débito'}
          selected={paymentMethod === 'Cartão de débito'}
          onClick={() => handleChangePaymentMethod('Cartão de débito')}
        />
        <Select
          icon={<Money size={16} />}
          label={'dinheiro'}
          selected={paymentMethod === 'Dinheiro'}
          onClick={() => handleChangePaymentMethod('Dinheiro')}
        />
      </SelectContainer>
    </Payment>
  )
}
