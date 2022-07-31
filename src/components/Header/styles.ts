import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 10rem;

  nav {
    display: flex;
    gap: 0.75rem;

    div {
      display: flex;
      align-items: center;

      border-radius: 6px;

      padding: 0.5rem;

      background-color: ${(props) => props.theme['purple-light']};
      color: ${(props) => props.theme['purple-dark']};

      svg {
        color: ${(props) => props.theme.purple};
        padding-right: 0.25rem;
      }
    }
  }

  a {
    display: flex;
    align-items: center;

    padding: 0.5rem;

    border-radius: 6px;

    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
  }
`
