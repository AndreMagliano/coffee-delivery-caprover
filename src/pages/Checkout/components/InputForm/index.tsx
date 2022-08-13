import { forwardRef, InputHTMLAttributes } from 'react'
import { Input, InputFormContainer } from './styles'

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {
  columns?: number
  optional?: boolean
}

// eslint-disable-next-line react/display-name
export const InputForm = forwardRef<HTMLInputElement, InputFormProps>(
  ({ columns, optional, ...rest }, ref) => {
    return (
      <InputFormContainer columns={columns} optional={optional}>
        <Input ref={ref} {...rest} />
        {optional && <span>Opcional</span>}
      </InputFormContainer>
    )
  },
)
