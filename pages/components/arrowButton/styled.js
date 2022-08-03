import styled from "styled-components";
import { device } from "../../constants/devicesSizes";

export const SelectButtonStyled = styled.button`
  min-width: 150px;
  padding: 10px 16px;
  background-color: hsla(0,0%,100%,.07);
  border: none;
  border-radius: 8px;
  font-size: 14px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  @media ${device.tablet} {
    min-width: 100%
  }
`

export const TitleStyled = styled.span`
  margin-right: 3px;
`

export const TextStyled = styled.span`
  font-weight: 700;
`

export const ArrowStyled = styled.img`
  width: 20px;
  transform: rotate(${({ isToggled }) => isToggled ? "270deg" : "90deg"});
  margin-left: 10px;
`