import styled from "styled-components";
import { device } from "../../constants/devicesSizes";

export const TitleStyled = styled.h1`
  font-size: 72px;
  line-height: 74px;
  font-weight: 700;

  @media ${device.tablet} {
    font-size: 40px;
    line-height: 40px;
  }
`