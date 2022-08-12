import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 10rem;

  img {
    width: 5.312rem;
  }

  nav {
    display: flex;
    gap: 0.75rem;
  }

  > a {
    box-shadow: none;
  }

  @media (max-width: 700px) {
    padding: 2rem 3rem;
  }
`

export const LocaleContainer = styled.div`
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
`
