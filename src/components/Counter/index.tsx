import { Minus, Plus } from 'phosphor-react'
import { CounterContainer } from './styles'

interface CounterProps {
  amount: number
  handleAmountChange: (amountChange: number) => void
}

export function Counter({ amount, handleAmountChange }: CounterProps) {
  return (
    <CounterContainer>
      <button onClick={() => handleAmountChange(-1)}>
        <Minus size={14} weight="bold" />
      </button>
      <p>{amount}</p>
      <button onClick={() => handleAmountChange(1)}>
        <Plus size={14} weight="bold" />
      </button>
    </CounterContainer>
  )
}
