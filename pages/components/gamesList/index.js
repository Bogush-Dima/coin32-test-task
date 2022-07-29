import Link from "next/link"
import { GameCard } from "../gameCard"
import { WrapperStyled, CardWrapper } from "./styled"

export const GamesList = ({ games }) => {
  return (
    <WrapperStyled>
      {games.map(({ 
        id, 
        slug, 
        name, 
        background_image, 
        rating, 
        released 
      }) => (
        <CardWrapper key={id}>
          <Link href={`/game/${slug}`}>
            <a>
              <GameCard 
                name={name} 
                poster={background_image} 
                rating={rating}
                release={released}
              />
            </a>
          </Link>
        </CardWrapper>
      ))}
    </WrapperStyled>
  )
}