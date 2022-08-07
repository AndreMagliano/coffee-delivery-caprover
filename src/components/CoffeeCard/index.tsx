import { useState } from 'react'

import { Counter } from '../Counter'
import { ShoppingCartSimple } from 'phosphor-react'

import {
  CoffeeCardContainer,
  CoffeeTag,
  TagsContainer,
  BuyContainer,
  PriceContainer,
  ActionsContainer,
} from './styles'

import { Coffee } from '../../contexts/CartContext'

export function CoffeeCard({
  id,
  name,
  tags,
  price,
  image,
  description,
}: Coffee) {
  const [amount, setAmount] = useState(1)

  function onAmountChange(amountChange: number) {
    const newAmount = amount + amountChange
    if (newAmount >= 1 && newAmount < 10) {
      setAmount(newAmount)
    }
  }

  function handleAddToCart() {
    console.log('buy', amount)
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
