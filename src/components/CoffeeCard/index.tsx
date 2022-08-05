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

interface CoffeeCardProps {
  id: number
  name: string
  tags: string[]
  price: number
  image: string
  description: string
}

export function CoffeeCard({
  id,
  name,
  tags,
  price,
  image,
  description,
}: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1)

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
          <Counter quantity={quantity} />
          <button>
            <ShoppingCartSimple size={22} weight="fill" />
          </button>
        </ActionsContainer>
      </BuyContainer>
    </CoffeeCardContainer>
  )
}
