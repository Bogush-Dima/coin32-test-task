/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { Button } from "../button";
import { 
  AllItemsContainerStyled, 
  ButtonsWrapperStyled, 
  MainWrapperStyled, 
  ScreenshotStyled, 
  WindowStyled 
} from "./styled"

export const Slider = ({ screenshots }) => {
  const screenshotRef = useRef(null)
  const [count, setCount] = useState(0)
  const [offset, setOffset] = useState(0)

  const changeOffset = () => setOffset(screenshotRef.current.width * count)

  useEffect(() => {
    window.addEventListener("resize", changeOffset)
    return () => window.removeEventListener("resize", changeOffset)
  }, [screenshotRef.current?.width])

  useEffect(() => {
    changeOffset()
  }, [count])

  const handleNext = () => {
      if (count === screenshots.length - 1) {
        setCount(0)
      } else {
        setCount((prev) => prev + 1)
      }
  }

  const handlePrevious = () => {
    if (!count) {
      setCount(screenshots.length - 1)
    } else {
      setCount((prev) => prev - 1)
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
      <ButtonsWrapperStyled>
        <Button onClick={handlePrevious} text="Previous" />
        <Button onClick={handleNext} text="Next" />
      </ButtonsWrapperStyled>
    </MainWrapperStyled>
  )
}