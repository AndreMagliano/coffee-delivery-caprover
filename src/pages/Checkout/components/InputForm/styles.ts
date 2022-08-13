import styled from 'styled-components'

interface InputFormContainerProps {
  columns?: number
  optional?: boolean
}

export const InputFormContainer = styled.div<InputFormContainerProps>`
  grid-column: span ${(props) => (props.columns ? props.columns : 1)};

  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  background-color: ${(props) => props.theme['base-input']};

  padding: 0.75rem;
  gap: 0.5rem;

  span {
    color: ${(props) => props.theme['base-label']};
    font-style: italic;

    font-size: 0.75rem;
  }

  :focus-within {
    box-shadow: 0 0 0 1px ${(props) => props.theme['yellow-dark']};
  }
`

export const Input = styled.input`
  width: 100%;

  border: none !important;

  background-color: ${(props) => props.theme['base-input']};

  color: ${(props) => props.theme['base-text']};

  box-shadow: none !important;

  ::placeholder {
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
    line-height: 130%;
  }
`
