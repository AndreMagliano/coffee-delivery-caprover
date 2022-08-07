import styled from 'styled-components'

export const CartContainer = styled.div`
  a {
    display: flex;
    align-items: center;

    padding: 0.5rem;

    border-radius: 6px;

    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};

    position: relative;

    ::after {
      content: '5';

      position: absolute;

      display: flex;
      align-items: center;
      justify-content: center;

      top: -8px;
      right: -8px;

      background-color: ${(props) => props.theme['yellow-dark']};

      color: ${(props) => props.theme.white};

      font-size: 0.75rem;
      font-weight: bold;
      line-height: 130%;

      width: 1.25rem;
      height: 1.25rem;

      border-radius: 1000px;
    }
  }
`
