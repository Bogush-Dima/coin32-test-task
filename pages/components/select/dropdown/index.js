import { ListItemStyled, MainWrapperStyled } from "./styled"

export const Dropdown = ({ 
  listItems, 
  isOpen, 
  setIsOpen, 
  setSelectedItem }) => {
  const selectItem = (platformId, platformName) => () => {
    setSelectedItem({ id: platformId, name: platformName })
    setIsOpen((prev) => !prev)
  }

  return (
    <MainWrapperStyled isOpen={isOpen}>
      <ul>
        {listItems.map(({ id, name }) => (
          <ListItemStyled 
            key={id} 
            id={id} 
            onClick={selectItem(id, name)}
          >
            {name}
          </ListItemStyled>
        ))}
      </ul>
    </MainWrapperStyled>
  )
}