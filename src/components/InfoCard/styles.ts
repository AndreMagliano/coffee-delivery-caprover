import styled from 'styled-components'

interface IconContainerProps {
  backgroundColor: string
}

export const InfoCardContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 0.75rem;

  font-size: 1rem;
`

export const IconContainer = styled.div<IconContainerProps>`
  width: 2rem;
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;

  background-color: ${(props) => props.backgroundColor};
  border-radius: 100%;

  color: ${(props) => props.theme.white};
`
