import { useFormContext } from 'react-hook-form'
import { InputForm } from '../InputForm'
import { FormContent } from './styles'

export function Form() {
  const { register } = useFormContext()

  return (
    <FormContent>
      <InputForm
        type="text"
        placeholder="CEP"
        minLength={9}
        maxLength={9}
        {...register('cep')}
        required
      />
      <InputForm
        type="text"
        placeholder="Rua"
        columns={3}
        {...register('street')}
        required
      />
      <InputForm
        type="number"
        placeholder="Número"
        min="1"
        {...register('number', { valueAsNumber: true })}
        required
      />
      <InputForm
        type="text"
        placeholder="Complemento"
        {...register('complement')}
        columns={2}
        optional
      />
      <InputForm
        type="text"
        placeholder="Bairro"
        {...register('district')}
        required
      />
      <InputForm
        type="text"
        placeholder="Cidade"
        {...register('city')}
        required
      />
      <InputForm
        type="text"
        placeholder="UF"
        minLength={2}
        maxLength={2}
        {...register('state')}
        required
      />
    </FormContent>
  )
}
