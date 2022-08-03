import styled from "styled-components";

export const MainWrapperStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: white;
  width: 100%;
  min-width: 250px;
  border-radius: 5px;
  display: ${({ isOpen }) => isOpen ? "block" : "none" };
  overflow: hidden;
  max-height: 500px;
  overflow-y: auto;
`

export const ListItemStyled = styled.li`
  list-style: none;
  color: black;
  cursor: pointer;
  padding: 10px;
  background: ${({ isSelected }) => isSelected && "rgba(0,0,0,.1)"};

  &:hover {
    background: rgba(0,0,0,.1);
  }
`