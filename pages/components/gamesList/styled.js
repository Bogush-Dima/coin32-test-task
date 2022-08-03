import styled from "styled-components";
import { device } from "../../constants/devicesSizes";

export const WrapperStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

export const CardWrapper = styled.div`
  margin: 20px;
  flex-basis: 30%;
  max-width: 400px;

  @media ${device.laptop} { 
    flex-basis: 45%;
    max-width: 100%;
  };

  @media ${device.tablet} { 
    flex-basis: 100%;
  }
`