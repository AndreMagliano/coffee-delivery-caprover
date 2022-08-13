import styled from 'styled-components'

export const FormContent = styled.div`
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 1fr;

  gap: 1rem 0.75rem;

  @media (max-width: 957px) {
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
  }
`
