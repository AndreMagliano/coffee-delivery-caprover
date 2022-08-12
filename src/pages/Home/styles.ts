import styled from 'styled-components'

import Background from '../../assets/background.svg'

export const HomeContainer = styled.div`
  margin-bottom: 9.812rem;
`

export const IntroContent = styled.div`
  display: flex;

  background: ${() => `url(${Background}) no-repeat center center`};

  gap: 3.5rem;

  display: flex;
  align-items: flex-start;

  img {
    width: 29.75rem;
  }

  h1 {
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme['base-title']};
    font-size: 3rem;
    font-weight: 800;
    line-height: 130%;
    margin-bottom: 1rem;
  }

  > div > p {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    line-height: 130%;
    margin-top: 1rem;
  }

  padding: 0 10rem;

  padding-top: 5.875rem;

  @media (max-width: 700px) {
    padding: 0 3rem;
  }

  @media (max-width: 1275px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(12rem, auto));

  margin-top: 4.125rem;
  margin-bottom: 6.75rem;

  gap: 1.25rem 2.5rem;

  @media (max-width: 1275px) {
    grid-template-columns: repeat(2, minmax(12rem, auto));
  }
`

export const CoffeeContainer = styled.main`
  h2 {
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme['base-title']};
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;

    margin-top: 2rem;
    margin-bottom: 3.375rem;
  }

  padding: 0 10rem;

  @media (max-width: 700px) {
    padding: 0 3rem;
  }
`

export const CoffeeList = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(16rem, auto));
  gap: 2.5rem 1rem;
`
