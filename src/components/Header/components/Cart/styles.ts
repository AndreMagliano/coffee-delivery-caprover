import styled, { css } from 'styled-components'

interface CartContainerProps {
  amountOfItemsInCart: number
}

export const CartContainer = styled.div<CartContainerProps>`
  a {
    display: flex;
    align-items: center;

    padding: 0.5rem;

    border-radius: 6px;

    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};

    position: relative;

    ${(props) =>
      props.amountOfItemsInCart > 0
        ? css`
            ::after {
              content: '${props.amountOfItemsInCart}';

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

              width: 1.25rem;
              height: 1.25rem;

              border-radius: 1000px;
            }
          `
        : null}
  }
`
