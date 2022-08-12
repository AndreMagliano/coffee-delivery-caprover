import { ButtonHTMLAttributes, ReactNode } from 'react'
import { SelectContainer } from './styles'

interface SelectProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode
  label: string
  selected: boolean
}

export function Select({ icon, label, selected, ...rest }: SelectProps) {
  return (
    <SelectContainer type="button" selected={selected} {...rest}>
      {icon}
      <p>{label.toUpperCase()}</p>
    </SelectContainer>
  )
}
