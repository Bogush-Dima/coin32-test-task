import { StyledButton } from "../button/styled"
import { Slider } from "../slider"
import { DescriptionStyled } from "./styled"

export const GameInfo = ({ websiteLink, description, screenshots }) => {
  return (
    <>
      <a href={websiteLink} target="blank">
        <StyledButton className="visitWebsite">Visit website</StyledButton>
      </a>
      <DescriptionStyled dangerouslySetInnerHTML={{ __html: description }} />
      <Slider screenshots={screenshots} />
    </>
  )
}