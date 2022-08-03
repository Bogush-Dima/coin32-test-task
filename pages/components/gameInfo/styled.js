import styled from "styled-components";
import { device } from "../../constants/devicesSizes";

export const DescriptionStyled = styled.div`
  font-size: 24px;
  font-weight: 500;
  padding: 0 30px;
  margin: 40px 0;

  @media ${device.tablet} {
    font-size: 15px;
  }
`