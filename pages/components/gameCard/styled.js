import styled from "styled-components";
import { device } from "../../constants/devicesSizes";

export const MainWrapperStyled = styled.div`
  background-color: #202020;
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
`

export const PosterStyled = styled.div`
  background: ${({ src }) => `url(${src})`};
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 200px;

  @media ${device.laptop} { 
    height: 300px
  }
`

export const InfoWrapper = styled.div`
  margin: 20px
`

export const NameStyled = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
`

export const InfoStyled = styled.div`
  font-size: 15px;
  font-weight: 500;
`