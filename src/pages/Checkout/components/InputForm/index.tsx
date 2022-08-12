import { ChangeEvent, InputHTMLAttributes, useState } from 'react'
import { Input, InputFormContainer } from './styles'

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {
  columns?: number
  optional?: boolean
}

export function InputForm({ columns, optional, ...rest }: InputFormProps) {
  const [value, setValue] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <InputFormContainer columns={columns} optional={optional}>
      <Input {...rest} onChange={handleChange} value={value} />
      {optional && value.length === 0 && <span>Opcional</span>}
    </InputFormContainer>
  )
}
