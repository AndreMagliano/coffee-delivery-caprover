import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useContext, useState } from 'react'
import { Cart } from '../../components/Header/components/Cart'
import { CartContext } from '../../contexts/CartContext'
import { CoffeeSelected } from './components/CoffeeSelected'
import { InputForm } from './components/InputForm'
import { Select } from './components/Select'
import {
  CheckoutContainer,
  CoffeeSelectedContainer,
  ConfirmButton,
  Divider,
  FormContainer,
  FormContent,
  Info,
  Payment,
  SelectContainer,
  Total,
} from './styles'

export function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState('Cartão de crédito')

  const { cart } = useContext(CartContext)

  const TotaLItems = cart.reduce(
    (sum, item) => sum + item.price * item.amount,
    0,
  )
  const TotaLItemsFormatted = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(TotaLItems)

  const TotaLFormatted = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(TotaLItems + 3.5)

  function handleChangePaymentMethod(method: string) {
    setPaymentMethod(method)
  }

  return (
    <CheckoutContainer>
      <FormContainer>
        <h1>Complete seu pedido</h1>
        <div>
          <Info>
            <MapPinLine size={22} />
            <div>
              <strong>Endereço de Entrega</strong>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </Info>
          <FormContent>
            <InputForm type="text" placeholder="CEP" />
            <InputForm type="text" placeholder="Rua" columns={3} />
            <InputForm type="number" placeholder="Número" min="0" />
            <InputForm
              type="text"
              placeholder="Complemento"
              columns={2}
              optional
            />
            <InputForm type="text" placeholder="Bairro" />
            <InputForm type="text" placeholder="Cidade" />
            <InputForm type="text" placeholder="UF" />
          </FormContent>
        </div>

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
              selected={paymentMethod === 'cartão de débito'}
              onClick={() => handleChangePaymentMethod('cartão de débito')}
            />
            <Select
              icon={<Money size={16} />}
              label={'dinheiro'}
              selected={paymentMethod === 'dinheiro'}
              onClick={() => handleChangePaymentMethod('dinheiro')}
            />
          </SelectContainer>
        </Payment>
      </FormContainer>

      <CoffeeSelectedContainer>
        <h1>Cafés selecionados</h1>
        <div>
          {cart.map((coffee) => {
            return (
              <>
                <CoffeeSelected
                  id={coffee.id}
                  amount={coffee.amount}
                  image={coffee.image}
                  name={coffee.name}
                  price={coffee.price}
                  key={coffee.id}
                />
                <Divider />
              </>
            )
          })}
          <Total>
            <div>
              <p>Total de Itens</p>
              <p>{TotaLItemsFormatted}</p>
            </div>
            <div>
              <p>Entrega</p>
              <p>R$ 3,50</p>
            </div>
            <div>
              <strong>Total</strong>
              <strong>{TotaLFormatted}</strong>
            </div>
          </Total>
          <ConfirmButton type="submit" disabled={cart.length === 0}>
            CONFIRMAR PEDIDO
          </ConfirmButton>
        </div>
      </CoffeeSelectedContainer>
    </CheckoutContainer>
  )
}
