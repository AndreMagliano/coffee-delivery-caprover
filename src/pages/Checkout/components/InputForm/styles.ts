import styled from 'styled-components'

interface InputFormContainerProps {
  columns?: number
  optional?: boolean
}

export const InputFormContainer = styled.div<InputFormContainerProps>`
  grid-column: span ${(props) => (props.columns ? props.columns : 1)};
  position: relative;

  span {
    position: absolute;
    top: 1rem;
    right: 1rem;

    color: ${(props) => props.theme['base-label']};
    font-style: italic;

    font-size: 0.75rem;
  }
`

export const Input = styled.input`
  width: 100%;

  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  padding: 0.75rem;

  background-color: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};

  ::placeholder {
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
    line-height: 130%;
  }
`
