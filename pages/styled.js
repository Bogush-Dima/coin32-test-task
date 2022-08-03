import styled from "styled-components";
import { device } from "./constants/devicesSizes";

export const SearchInputWrapper = styled.div`
  margin-top: 30px;
`

export const HeaderButtonsWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 600px;
  margin-top: 30px;

  @media ${device.tablet} {
    flex-direction: column;
    max-width: 100%;
    height: 150px;
  }
`