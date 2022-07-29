import { ROOT_API_PATH, GAMES_API_PATH, API_KEY } from "./constants/paths"

export const getStaticProps = async() => {
  const response = await fetch(`${ROOT_API_PATH}${GAMES_API_PATH}?${API_KEY}&page=3`)
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
  results.forEach(el => console.log(el.name))

  return (
    <p>Home page</p>
  )
}

export default HomePage