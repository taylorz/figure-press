import { useState } from "react"
import styled from "styled-components"

import {
  Grid,
  Section,
  Text
} from '../components/ui'
import Slideshow from '../components/Slideshow'

const StyledBookDescription = styled(Grid)`
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}px) {
    flex-direction: column-reverse;
  }
`;

const FeaturedBook = ({ ...rest }) => {
  const [currentBookImage, setCurrentBookImage] = useState(0)

  return (
    <Section>

      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <Slideshow
            images={FiguresImages}
            currentBookImage={currentBookImage}
            setCurrentBookImage={setCurrentBookImage}
          />
        </Grid>
      </Grid>

      <Grid container mt={2} flexDirection="row">
        <Grid item xs={12} sm={4}>
          <Text>{currentBookImage + 1} of {FiguresImages.length}</Text>
        </Grid>
        <Grid item xs={12} sm={4} alignItems="center">
          <Text bold>Figures</Text>
          <Text italic>Matthew Ransom, Taylor Zanke</Text>
          <Text>$32.00</Text>
        </Grid>
        <Grid item xs={12} sm={4} alignItems="flex-end" justifyContent="flex-end">
          <Text link>Add to cart</Text>
        </Grid>
      </Grid>

      <StyledBookDescription container mt={2} flexDirection="row">
        <Grid item xs={12} sm={6} mb={2}>
          <Text>122 Pages</Text>
          <Text>7.5 x 5 inches</Text>
          <Text>First Edition of 100</Text>
          <Text>ISBN 978-1-7372541-9-2</Text>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Text display p>Figures is the outcome of a rigorously imprecise process that began long before we knew that outcome would be a book. We started simply by sharing photographs, talking about them, and trying to discern what we liked about them, or didn’t. And rather like a photograph, this book is simply the bracketing of something which is ongoing, without a discernible beginning or end – something that continues with the launch of our eponymous press.</Text>
          <Text display p>The photographs here were taken by both of us over the span of several years, well before we had ever discussed them with one another, and well before we had the idea of developing them into a book. Indeed, the images are simply documentations of experience, evidence of impulses, the result of not not being able to photograph a condition before us.</Text>
          <Text display p>At first, our focus was entirely on the subject matter of the photographs themselves: images of trees, grass, window frames, flowers, or an open car door. As we looked at them together, the sense of a slowly gathering, shared quality in the photographs encouraged a more deliberate comparison.</Text>
        </Grid>
      </StyledBookDescription>

    </Section>
  )
}

export default FeaturedBook

const FiguresImages = ["https://i.imgur.com/4DpYwVa.png", "https://i.imgur.com/68Z1cSe.jpg"]
