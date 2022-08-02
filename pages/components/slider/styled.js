import styled from "styled-components";

export const MainWrapperStyled = styled.div`
  width: 70%;
  margin: 0 auto;
`

export const WindowStyled = styled.div`
  margin: 0 auto;
  overflow: hidden;
`

export const AllItemsContainerStyled = styled.div`
  display: flex;
  width: 100%;
  transform: translateX(-${({ offset }) => offset}px);
  transition: 0.3s;
`

export const ScreenshotStyled = styled.img`
  max-width: 100%;
  min-width: 100%;
`

export const ButtonsWrapperStyled = styled.div`
  margin: 30px;
  display: flex;
  justify-content: space-between;
`