import styled from 'styled-components'

export const CounterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  gap: 0.5rem;
  padding: 0.5rem;

  p {
    width: 1rem;
    text-align: center;
    color: ${(props) => props.theme['base-title']};
    font-size: 1rem;
    line-height: 130%;
  }

  button {
    border: 0;
    background: transparent;

    color: ${(props) => props.theme.purple};

    box-shadow: none;

    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`
