import { ROOT_API_PATH, GAMES_API_PATH, API_KEY } from "../constants/paths"

export const getServerSideProps = async(context) => {
  const { slug } = context.params
  const response = await fetch(`${ROOT_API_PATH}${GAMES_API_PATH}/${slug}?${API_KEY}`)
  const data = await response.json()

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      game: data
    }
  }
}

const GamePage = ({ game }) => {
  const { name } = game

  return (
    <p>{name}</p>
  )
}

export default GamePage