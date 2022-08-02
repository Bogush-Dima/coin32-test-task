import { useState } from "react"
import { Dropdown } from "./dropdown"
import { SelectButton } from "./selectButton"
import { MainWrapperStyled } from "./styled"

export const Select = ({ listItems, selectedPlatform, setSelectedPlatform, buttonTitle }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <MainWrapperStyled>
      <SelectButton title={buttonTitle} text={selectedPlatform?.name || "All"} setIsOpen={setIsOpen} />
      {listItems && (
        <Dropdown 
          listItems={listItems} 
          isOpen={isOpen} 
          setIsOpen={setIsOpen} 
          setSelectedItem={setSelectedPlatform} 
        />
      )}
    </MainWrapperStyled>
  )
}