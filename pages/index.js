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
import { HeaderButtonsWrapperStyled, SearchInputWrapper } from "./styled"
import { SearchInput } from "./components/searchInput"

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
  const [searchValue, setSearchValue] = useState("")
  const [gamesRequestPage, setGamesRequestPage] = useState(2)
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler)
    return () => document.removeEventListener("scroll", scrollHandler)
  }, [])

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
    (async () => {
      const searchGamesResponse = await fetch(`${ROOT_API_PATH}${GAMES_API_PATH}?${API_KEY}&search=${searchValue.toLowerCase()}`)
      const searchGamesData = await searchGamesResponse.json()
      setCurrentGamesList(getRelevantGamesData(searchGamesData.results))
    })()
  }, [searchValue])

  useEffect(() => {
    if (isFetching) {
      (async () => {
        const searchGamesResponse = await fetch(`${ROOT_API_PATH}${GAMES_API_PATH}?${API_KEY}&page=${gamesRequestPage}`)
        const searchGamesData = await searchGamesResponse.json()
        setCurrentGamesList((prev) => [...prev, ...getRelevantGamesData(searchGamesData.results)])
        setGamesRequestPage((prev) => prev + 1)
        setIsFetching(false)
      })()
    }
  }, [isFetching])

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

  const scrollHandler = (e) => {
    const isScrolledToBottom = e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100
    if (isScrolledToBottom) {
      setIsFetching(true)
    }
  }

  return (
    <>
      <Header title="Games List">
        <SearchInputWrapper>
          <SearchInput setSearchValue={setSearchValue} />
        </SearchInputWrapper>
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