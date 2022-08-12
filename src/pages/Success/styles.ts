import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;

  align-items: flex-end;

  margin-top: 5rem;
  padding: 0 10rem;

  gap: 6.375rem;

  img {
    width: 30.75rem;
  }

  @media (max-width: 1262px) {
    flex-direction: column-reverse;
    align-items: flex-start;
  }

  @media (max-width: 700px) {
    padding: 0 3rem;
  }
`

export const DetailsContainer = styled.div`
  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    line-height: 130%;
    font-weight: 700;
    color: ${(props) => props.theme['yellow-dark']};
  }

  > p {
    font-size: 1.25rem;
    line-height: 130%;
  }
`

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2.5rem;

  gap: 2rem;

  border-radius: 6px 36px;

  background-color: ${(props) => props.theme['base-card']};
`

export const Border = styled.div`
  margin-top: 2.5rem;

  border-radius: 6px 36px;

  padding: 1px;

  background: linear-gradient(
    to right,
    ${(props) => props.theme.yellow},
    ${(props) => props.theme.purple}
  );
`
