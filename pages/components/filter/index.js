import { useState } from "react"
import { Dropdown } from "./dropdown"
import { ArrowButton } from "../arrowButton"
import { MainWrapperStyled } from "./styled"

export const Filter = ({ listItems, selectedPlatform, setSelectedPlatform, buttonTitle }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <MainWrapperStyled>
      <ArrowButton title={buttonTitle} text={selectedPlatform?.name || "All"} setIsToggled={setIsOpen} />
        <Dropdown 
          listItems={listItems} 
          selectedPlatformId={selectedPlatform?.id}
          isOpen={isOpen} 
          setIsOpen={setIsOpen} 
          setSelectedItem={setSelectedPlatform} 
        />
    </MainWrapperStyled>
  )
}