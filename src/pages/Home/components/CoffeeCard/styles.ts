import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;

  img {
    width: 7.5rem;
    margin-top: -20px;
  }

  strong {
    font-family: 'Baloo 2', cursive;
    font-size: 1.25rem;
    line-height: 130%;
    text-align: center;
    color: ${(props) => props.theme['base-subtitle']};

    margin-bottom: 0.5rem;

    width: 13.5rem;
  }

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    line-height: 130%;
    text-align: center;
    color: ${(props) => props.theme['base-label']};

    margin-bottom: 2.062rem;

    width: 13.5rem;
  }
`

export const TagsContainer = styled.div`
  display: flex;

  gap: 0.25rem;

  margin-top: 0.75rem;
  margin-bottom: 1rem;
`

export const CoffeeTag = styled.p`
  background-color: ${(props) => props.theme['yellow-light']};
  border-radius: 100px;

  color: ${(props) => props.theme['yellow-dark']};

  font-weight: bold;
  font-size: 0.625rem;

  line-height: 130%;

  padding: 0.25rem 0.5rem;

  display: flex;
  justify-content: center;
`

export const BuyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-text']};

  strong {
    font-weight: 800;
    font-size: 1.5rem;

    color: ${(props) => props.theme['base-text']};
  }

  margin-bottom: 1.25rem;
`
export const PriceContainer = styled.div`
  margin-right: 1.437rem;
`
export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 0.5rem;

  > button {
    display: flex;
    align-items: center;

    background-color: ${(props) => props.theme['purple-dark']};

    border: 0;
    border-radius: 8px;

    padding: 0.5rem;

    color: ${(props) => props.theme['base-card']};

    transition: background 0.2s;

    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.purple};
    }
  }
`
