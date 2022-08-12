import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  display: flex;

  margin-top: 2.5rem;
  margin-bottom: 2.5rem;

  padding: 0 10rem;

  justify-content: space-between;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 1.125rem;
    font-weight: bold;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }

  @media (max-width: 700px) {
    padding: 0 3rem;
  }

  @media (max-width: 1340px) {
    flex-direction: column;
    gap: 1rem;
  }
`

export const FormContainer = styled.div`
  max-width: 40rem;

  > div {
    display: flex;
    flex-direction: column;

    margin-top: 0.937rem;
    padding: 2.5rem;

    background-color: ${(props) => props.theme['base-card']};
    border-radius: 6px;
  }
`

export const Payment = styled.div`
  div svg {
    color: ${(props) => props.theme.purple};
  }
`

export const SelectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 0.75rem;
`

export const CoffeeSelectedContainer = styled.div`
  max-width: 28rem;

  > div {
    display: flex;
    flex-direction: column;

    margin-top: 0.937rem;
    padding: 2.5rem;

    background-color: ${(props) => props.theme['base-card']};
    border-radius: 6px 44px;
  }
`

export const Divider = styled.div`
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
`

export const Info = styled.div`
  display: flex;
  gap: 0.5rem;

  font-size: 0.875rem;

  margin-bottom: 2rem;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }

  strong {
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
  }
`

export const FormContent = styled.div`
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 1fr;

  gap: 1rem 0.75rem;

  @media (max-width: 957px) {
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
  }
`

export const Total = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;
  }

  strong {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
  }

  margin-bottom: 1.5rem;
`

export const ConfirmButton = styled.button`
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};

  width: 23rem;

  font-size: 0.875rem;
  font-weight: 700;

  line-height: 160%;

  padding: 0.75rem 0;

  border: 0;
  border-radius: 6px;
`
