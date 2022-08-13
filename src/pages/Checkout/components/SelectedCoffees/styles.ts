import styled from 'styled-components'

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
