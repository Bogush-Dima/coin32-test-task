import { GameInfo } from "../components/gameInfo"
import { Header } from "../components/header"
import { 
  ROOT_API_PATH, 
  GAMES_API_PATH, 
  GAME_SCREENSHOTS_API_PATH, 
  API_KEY 
} from "../constants/paths"
import { getRelevantScreenshotsData } from "../helpers/api"

export const getServerSideProps = async(context) => {
  const { slug } = context.params
  const responseGameInfo = await fetch(`${ROOT_API_PATH}${GAMES_API_PATH}/${slug}?${API_KEY}`)
  const responseGameScreenshots = await fetch(`${ROOT_API_PATH}${GAMES_API_PATH}/${slug}${GAME_SCREENSHOTS_API_PATH}?${API_KEY}`)
  const info = await responseGameInfo.json()
  const screenshots = await responseGameScreenshots.json()

  if (!info || !screenshots) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      game: info,
      screenshots: getRelevantScreenshotsData(screenshots.results)
    }
  }
}

const GamePage = ({ game, screenshots }) => {
  const { name, website, description } = game

  return (
    <>
      <Header title={name} />
      <GameInfo 
        websiteLink={website} 
        description={description}
        screenshots={screenshots}
      />
    </>
  )
}

export default GamePage