import { Title } from "../title"
import { WrapperStyled } from "./styled"

export const Header = ({ title, children }) => {
  return (
    <WrapperStyled>
      <Title value={title} />
      {children}
    </WrapperStyled>
  )
}