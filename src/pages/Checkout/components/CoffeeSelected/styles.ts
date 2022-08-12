import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 4rem;
  }

  strong {
    align-self: flex-start;
  }
`

export const Info = styled.div`
  display: flex;
  align-items: center;

  gap: 1.25rem;
`

export const Actions = styled.div`
  display: flex;

  height: 2rem;

  gap: 0.5rem;
`

export const Remove = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;

  background-color: ${(props) => props.theme['base-button']};

  padding: 0.5rem;
  border-radius: 6px;

  gap: 0.25rem;

  font-size: 0.75rem;

  color: ${(props) => props.theme['base-text']};

  svg {
    color: ${(props) => props.theme.purple};
    line-height: 0;
  }
`

export const Details = styled.div`
  > p {
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 130%;
  }
`
