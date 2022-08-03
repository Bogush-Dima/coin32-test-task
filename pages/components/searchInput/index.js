import { TextFieldStyled } from "./styled"

export const SearchInput = ({ setSearchValue }) => {
  const changeValue = (e) => setSearchValue(e.target.value)

  return (
    <TextFieldStyled type="text" onChange={changeValue} placeholder="Search" />
  )
}