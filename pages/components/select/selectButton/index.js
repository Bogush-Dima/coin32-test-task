import { ARROW_IMG_PATH } from "../../../constants/paths"
import { 
  ArrowStyled, 
  SelectButtonStyled, 
  TextStyled, 
  TitleStyled 
} from "./styled"

export const SelectButton = ({ text, title, setIsOpen }) => {
  return (
    <SelectButtonStyled onClick={() => setIsOpen((prev) => !prev)}>
      <div>
        <TitleStyled>{title}</TitleStyled>
        <TextStyled>{text}</TextStyled>
      </div>
      <ArrowStyled src={ARROW_IMG_PATH} />
    </SelectButtonStyled>
  )
}