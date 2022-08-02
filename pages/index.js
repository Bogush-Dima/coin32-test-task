import { useEffect, useState } from "react"
import { GamesList } from "./components/gamesList"
import { Header } from "./components/header"
import { Select } from "./components/select"
import { getRelevantGamesData, getRelevantPlatformsData } from "./helpers/api"
import { 
  ROOT_API_PATH, 
  GAMES_API_PATH, 
  PLATFORMS_API_PATH, 
  API_KEY 
} from "./constants/paths"

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

  useEffect(() => {
    if (selectedPlatform) {
      (async () => {
        const gamesResponse = await fetch(`${ROOT_API_PATH}${GAMES_API_PATH}?${API_KEY}&platforms=${selectedPlatform.id}`)
        const gamesData = await gamesResponse.json()
        setCurrentGamesList(getRelevantGamesData(gamesData.results))
      })()
    }
  }, [selectedPlatform])

  return (
    <>
      <Header title="Games List">
        <Select 
          listItems={platformsList} 
          buttonTitle="Platform:"
          selectedPlatform={selectedPlatform} 
          setSelectedPlatform={setSelectedPlatform} 
        />
      </Header>
      <GamesList games={currentGamesList} />
    </>
  )
}

export default HomePage