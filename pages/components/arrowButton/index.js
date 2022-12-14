import { ARROW_IMG_PATH } from "../../constants/paths"
import { 
  ArrowStyled, 
  SelectButtonStyled, 
  TextStyled, 
  TitleStyled 
} from "./styled"

export const ArrowButton = ({ text, title, isToggled, toggle, setIsToggled }) => {
  const toggleButton = () => {
    if (setIsToggled) {
      setIsToggled((prev) => !prev)
    } else {
      toggle()
    }
  }

  return (
    <SelectButtonStyled onClick={toggleButton}>
      <div>
        <TitleStyled>{title}</TitleStyled>
        <TextStyled>{text}</TextStyled>
      </div>
      <ArrowStyled src={ARROW_IMG_PATH} isToggled={isToggled} />
    </SelectButtonStyled>
  )
}