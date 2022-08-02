import { StyledButton } from "./styled"

export const Button = ({ text, onClick }) => (
  <StyledButton onClick={onClick}>
    {text}
  </StyledButton>
)