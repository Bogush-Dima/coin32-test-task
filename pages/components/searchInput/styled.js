import styled from "styled-components";
import { device } from "../../constants/devicesSizes";

export const TextFieldStyled = styled.input`
  color: black;
  font-size: 20px;
  padding: 5px;
  border: none;
  border-radius: 5px;
  min-width: 400px;

  @media ${device.tablet} {
    min-width: 100%;
    width: 100%;
    font-size: 15px;
    padding: 10px 5px;
  }
`