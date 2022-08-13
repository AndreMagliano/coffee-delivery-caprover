import styled from 'styled-components'

export const Payment = styled.div`
  div svg {
    color: ${(props) => props.theme.purple};
  }
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

export const SelectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 0.75rem;
`
