import styled from "styled-components";
import { device } from "../../constants/devicesSizes";

export const StyledButton = styled.button`
  background: #7dd235;
  border: none;
  padding: 10px 15px;
  font-size: 20px;
  font-weight: 700;
  border-radius: 40px;
  cursor: pointer;

  &.visitWebsite {
    margin-top: 20px;
    margin-left: 30px;
  };

  @media ${device.tablet} {
    padding: 5px 10px;
    font-size: 15px;
  }
`