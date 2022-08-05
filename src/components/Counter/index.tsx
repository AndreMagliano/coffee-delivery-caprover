import { Minus, Plus } from 'phosphor-react'
import { CounterContainer } from './styles'

interface CounterProps {
  quantity: number
}

export function Counter({ quantity }: CounterProps) {
  return (
    <CounterContainer>
      <button>
        <Minus size={14} weight="bold" />
      </button>
      <p>{quantity}</p>
      <button>
        <Plus size={14} weight="bold" />
      </button>
    </CounterContainer>
  )
}
