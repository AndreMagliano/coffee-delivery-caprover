import styled, { css } from 'styled-components'

interface SelectContainerProps {
  selected: boolean
}

export const SelectContainer = styled.button<SelectContainerProps>`
  display: flex;
  box-shadow: none !important;

  width: 11.166rem;

  border: 0;
  border-radius: 6px;

  padding: 1rem;

  gap: 0.75rem;

  background-color: ${(props) => props.theme['base-button']};

  ${(props) =>
    props.selected &&
    css`
      box-shadow: 0 0 0 1px ${props.theme.purple} !important;
    `}

  p {
    text-align: start;
    color: ${(props) => props.theme['base-text']};
    font-size: 0.75rem;
    line-height: 160%;
  }
`
