import { GamesList } from "./components/gamesList"
import { Header } from "./components/header"
import { ROOT_API_PATH, GAMES_API_PATH, API_KEY } from "./constants/paths"

export const getStaticProps = async() => {
  const response = await fetch(`${ROOT_API_PATH}${GAMES_API_PATH}?${API_KEY}`)
  const data = await response.json()

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      gamesList: data
    }
  }
}

const HomePage = ({ gamesList }) => {
  const { results } = gamesList

  return (
    <>
      <Header title="Games List"></Header>
      <GamesList games={results} />
    </>
  )
}

export default HomePage