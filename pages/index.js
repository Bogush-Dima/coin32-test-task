/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { GamesList } from "./components/gamesList"
import { Header } from "./components/header"
import { Filter } from "./components/filter"
import { getRelevantGamesData, getRelevantPlatformsData } from "./helpers/api"
import { 
  ROOT_API_PATH, 
  GAMES_API_PATH, 
  PLATFORMS_API_PATH, 
  API_KEY 
} from "./constants/paths"
import { ArrowButton } from "./components/arrowButton"
import { HeaderButtonsWrapperStyled } from "./styled"

export const getStaticProps = async() => {
  const gamesResponse = await fetch(`${ROOT_API_PATH}${GAMES_API_PATH}?${API_KEY}`)
  const gamesData = await gamesResponse.json()

  const platformsResponse = await fetch(`${ROOT_API_PATH}${PLATFORMS_API_PATH}?${API_KEY}`)
  const platformsData = await platformsResponse.json()

  if (!gamesData) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      gamesList: getRelevantGamesData(gamesData.results),
      platformsList: getRelevantPlatformsData(platformsData.results)
    }
  }
}

const HomePage = ({ gamesList, platformsList }) => {
  const [currentGamesList, setCurrentGamesList] = useState(gamesList)
  const [selectedPlatform, setSelectedPlatform] = useState(null)
  const [isUpDateOrder, setIsUpDateOrder] = useState(false)
  const [isUpRatingOrder, setIsUpRatingOrder] = useState(false)

  useEffect(() => {
    if (selectedPlatform) {
      (async () => {
        const gamesResponse = await fetch(`${ROOT_API_PATH}${GAMES_API_PATH}?${API_KEY}&platforms=${selectedPlatform.id}`)
        const gamesData = await gamesResponse.json()
        setCurrentGamesList(getRelevantGamesData(gamesData.results))
      })()
    }
  }, [selectedPlatform])

  useEffect(() => {
    const sortedGamesList = currentGamesList.sort((a, b) => {
      if (isUpRatingOrder) {
        return a.rating - b.rating
      }
      return b.rating - a.rating
    })
    setCurrentGamesList(sortedGamesList)
  }, [isUpRatingOrder])

  useEffect(() => {
    const sortedGamesList = currentGamesList.sort((a, b) => {
      const timeValueA = new Date(a.released).getTime()
      const timeValueB = new Date(b.released).getTime()
      
      if (isUpDateOrder) {
        return timeValueA - timeValueB
      }
      return timeValueB - timeValueA
    })
    setCurrentGamesList(sortedGamesList)
  }, [isUpDateOrder])

  return (
    <>
      <Header title="Games List">
        <HeaderButtonsWrapperStyled>
          <ArrowButton 
            title="Order by:"
            text="Date"
            isToggled={isUpDateOrder}
            setIsToggled={setIsUpDateOrder}
          />
          <ArrowButton 
            title="Order by:"
            text="Rating"
            isToggled={isUpRatingOrder}
            setIsToggled={setIsUpRatingOrder}
          />
          <Filter 
            listItems={platformsList} 
            buttonTitle="Platform:"
            selectedPlatform={selectedPlatform} 
            setSelectedPlatform={setSelectedPlatform} 
          />
        </HeaderButtonsWrapperStyled>
      </Header>
      <GamesList games={currentGamesList} />
    </>
  )
}

export default HomePage