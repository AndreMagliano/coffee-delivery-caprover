import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 90rem;

  background-color: ${(props) => props.theme.background};

  margin: 0 auto;
`
