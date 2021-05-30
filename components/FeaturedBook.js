
import {
  Grid,
  Section,
  Text
} from '../components/ui'
import Slideshow from '../components/Slideshow'

const FeaturedBook = ({ ...rest }) => {
  return (
    <Section>
      <Grid container justifyContent="center">
        <Grid item xs={10}>
          <Slideshow images={FiguresImages}/>
        </Grid>
      </Grid>
    </Section>
  )
}

export default FeaturedBook

const FiguresImages = ["https://i.imgur.com/4DpYwVa.png", "https://i.imgur.com/68Z1cSe.jpg"]
