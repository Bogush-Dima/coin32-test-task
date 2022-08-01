import { StyledButton } from "./styled"

export const Button = ({ text, onClick, disabled }) => (
  <StyledButton onClick={onClick} disabled={disabled}>
    {text}
  </StyledButton>
)