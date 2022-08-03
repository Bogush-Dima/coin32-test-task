import styled from "styled-components";
import { device } from "../../constants/devicesSizes";

export const MainWrapperStyled = styled.div`
  position: relative;
  width: max-content;

  @media ${device.tablet} {
    width: 100%
  }
`