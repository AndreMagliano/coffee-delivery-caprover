import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'

import { CoffeeSelected } from '../CoffeeSelected'
import { v4 as uuidv4 } from 'uuid'
import {
  CoffeeSelectedContainer,
  ConfirmButton,
  Divider,
  Total,
} from './styles'

export function SelectedCoffees() {
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

  return (
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
              <Divider key={uuidv4()} />
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
  )
}
