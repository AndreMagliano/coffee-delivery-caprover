import { useContext, useState } from 'react'

import { Counter } from '../../../../components/Counter'
import { ShoppingCartSimple } from 'phosphor-react'

import {
  CoffeeCardContainer,
  CoffeeTag,
  TagsContainer,
  BuyContainer,
  PriceContainer,
  ActionsContainer,
} from './styles'

import { CartContext, Coffee } from '../../../../contexts/CartContext'

export function CoffeeCard({
  id,
  name,
  tags,
  price,
  image,
  description,
}: Coffee) {
  const [amount, setAmount] = useState(1)

  const { addToCart } = useContext(CartContext)

  function onAmountChange(amountChange: number) {
    const newAmount = amount + amountChange

    if (newAmount >= 1) {
      setAmount(newAmount)
    }
  }

  function handleAddToCart() {
    const newCoffee = {
      id,
      name,
      price,
      image,
      amount,
    }

    addToCart(newCoffee)
  }

  return (
    <CoffeeCardContainer>
      <img src={image} alt="" />

      <TagsContainer>
        {tags.map((tag) => {
          return <CoffeeTag key={tag}>{tag.toUpperCase()}</CoffeeTag>
        })}
      </TagsContainer>

      <strong>{name}</strong>
      <span>{description}</span>

      <BuyContainer>
        <PriceContainer>
          R$ <strong>{price.toFixed(2)}</strong>
        </PriceContainer>
        <ActionsContainer>
          <Counter amount={amount} handleAmountChange={onAmountChange} />
          <button onClick={handleAddToCart}>
            <ShoppingCartSimple size={22} weight="fill" />
          </button>
        </ActionsContainer>
      </BuyContainer>
    </CoffeeCardContainer>
  )
}
