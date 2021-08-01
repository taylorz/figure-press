import styled from "styled-components"

const StyledSlideshow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const StyledImageWrapper = styled.div`
`;
const StyledSlideshowImage = styled.img`
  width: 100%;
`;
const StyledPrev = styled.div`
  position: absolute;
  width: 50%;
  left: 0;
  top: 0;
  bottom: 0;
  /* background: red; */
  &:hover {
    cursor: w-resize;
  }
`;
const StyledNext = styled.div`
  position: absolute;
  width: 50%;
  right: 0;
  top: 0;
  bottom: 0;
  /* background: blue; */
  &:hover {
    cursor: e-resize;
  }
`;

const Slideshow = ({ images, currentBookImage, setCurrentBookImage, ...rest }) => {
  const numOfImages = images.length

  const onClickNext = () => {
    if (currentBookImage + 1 === numOfImages) {
      setCurrentBookImage(0)
    } else {
      setCurrentBookImage(currentBookImage + 1)
    }
  }
  const onClickPrev = () => {
    if (currentBookImage - 1 === -1) {
      setCurrentBookImage(numOfImages - 1)
    } else {
      setCurrentBookImage(currentBookImage - 1)
    }
  }

  return (
    <StyledSlideshow>
      <StyledPrev onClick={onClickPrev} />

      <StyledImageWrapper>
        <StyledSlideshowImage src={images[currentBookImage].src} />
      </StyledImageWrapper>

      <StyledNext onClick={onClickNext} />
    </StyledSlideshow>
  )
}

export default Slideshow
