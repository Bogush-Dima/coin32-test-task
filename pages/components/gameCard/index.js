import { 
  InfoWrapper, 
  MainWrapperStyled, 
  NameStyled, 
  PosterStyled, 
  InfoStyled 
} from "./styled";

export const GameCard = ({ name, poster, rating, release }) => (
  <MainWrapperStyled>
    <PosterStyled src={poster} />
    <InfoWrapper>
      <NameStyled>{name}</NameStyled>
      <InfoStyled>Rating: {rating}</InfoStyled>
      <InfoStyled>Released: {release}</InfoStyled>
    </InfoWrapper>
  </MainWrapperStyled>
)