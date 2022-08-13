import { Trash } from 'phosphor-react'
import { useContext, useState } from 'react'
import { Counter } from '../../../../components/Counter'
import { CartContext } from '../../../../contexts/CartContext'
import { Actions, CoffeeCardContainer, Details, Info, Remove } from './styles'

interface CoffeeSelectedProps {
  id: number
  name: string
  price: number
  image: string
  amount: number
}

export function CoffeeSelected({
  id,
  name,
  price,
  amount,
  image,
}: CoffeeSelectedProps) {
  const [actualAmount, setActualAmount] = useState(amount)
  const { updateAmount, removeFromCart } = useContext(CartContext)

  function handleAmountChange(amount: number) {
    const newAmount = actualAmount + amount

    if (newAmount >= 1) {
      setActualAmount(newAmount)
      updateAmount(id, newAmount)
    }
  }

  function handleRemoveFromCart() {
    removeFromCart(id)
  }

  return (
    <CoffeeCardContainer>
      <Info>
        <img src={image} alt="" />
        <Details>
          <p>{name}</p>
          <Actions>
            <Counter
              amount={actualAmount}
              handleAmountChange={handleAmountChange}
            />
            <Remove type="button" onClick={handleRemoveFromCart}>
              <Trash size={16} />
              <p>REMOVER</p>
            </Remove>
          </Actions>
        </Details>
      </Info>
      <strong>
        {Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
          minimumFractionDigits: 2,
        }).format(price)}
      </strong>
    </CoffeeCardContainer>
  )
}
