import styled from "styled-components";

export const MainWrapperStyled = styled.div`
  width: 80%;
`

export const WindowStyled = styled.div`
  width: 80%;
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