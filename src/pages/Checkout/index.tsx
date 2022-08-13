import { FormProvider, useForm } from 'react-hook-form'

import { MapPinLine } from 'phosphor-react'
import { CheckoutContainer, FormContainer, Info } from './styles'

import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Form } from './components/Form'
import { PaymentMethod } from './components/PaymentMethod'
import { SelectedCoffees } from './components/SelectedCoffees'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

const FormSchema = zod.object({
  cep: zod.string().min(9, 'Digite o CEP').max(9, 'Digite o CEP'),
  street: zod.string().min(1, 'Digite o nome da rua'),
  number: zod.number().min(1, 'O número precisa ter no mínimo um digito.'),
  complement: zod.string(),
  district: zod.string().min(1, 'Digite o bairro'),
  city: zod.string().min(1, 'Digite a cidade'),
  uf: zod.string().min(1, 'Digite o estado'),
})

type FormType = zod.infer<typeof FormSchema>

export function Checkout() {
  const { clearCart, changeAddress } = useContext(CartContext)
  const navigate = useNavigate()

  const FormState = useForm<FormType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      cep: '',
      street: '',
      complement: '',
      district: '',
      city: '',
      uf: '',
    },
  })

  const { handleSubmit, reset } = FormState

  function handleCreateNewOrder(data: FormType) {
    const newAddress = {
      street: data.street,
      number: data.number,
      complement: data.complement,
      city: data.city,
      uf: data.uf,
    }
    changeAddress(newAddress)
    reset()
    clearCart()
    navigate('/success')
  }

  return (
    <CheckoutContainer onSubmit={handleSubmit(handleCreateNewOrder)}>
      <FormContainer>
        <h1>Complete seu pedido</h1>
        <div>
          <Info>
            <MapPinLine size={22} />
            <div>
              <strong>Endereço de Entrega</strong>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </Info>

          <FormProvider {...FormState}>
            <Form />
          </FormProvider>
        </div>

        <PaymentMethod />
      </FormContainer>

      <SelectedCoffees />
    </CheckoutContainer>
  )
}
