import { useEffect, useRef, useState } from "react";
import { Button } from "../button";
import { 
  AllItemsContainerStyled, 
  MainWrapperStyled, 
  ScreenshotStyled, 
  WindowStyled 
} from "./styled"

export const Slider = ({ screenshots }) => {
  const screenshotRef = useRef(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    if (screenshotRef) {
      screenshotRef.current.maxOffsetValue = (screenshots.length - 1) * screenshotRef.current.width
    }
  }, [screenshotRef, screenshots.length])

  const handleNext = () => {
    if (offset < screenshotRef.current.maxOffsetValue) {
      setOffset((prev) => prev + screenshotRef.current.width)
    }
  }

  const handlePrevious = () => {
    if (offset) {
      setOffset((prev) => prev - screenshotRef.current.width)
    }
  }

  return (
    <MainWrapperStyled>
      <WindowStyled>
        <AllItemsContainerStyled offset={offset}>
          {screenshots.map(({ id, image }) => (
            <ScreenshotStyled key={id} ref={screenshotRef} src={image} />
          ))}
        </AllItemsContainerStyled>
      </WindowStyled>
      <Button onClick={handlePrevious} text="Previous" disabled={!offset} />
      <Button onClick={handleNext} text="Next" disabled={offset === screenshotRef.current?.maxOffsetValue} />
    </MainWrapperStyled>
  )
}