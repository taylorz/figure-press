import {
  Grid,
  Section,
  Text
} from '../components/ui'

const Introduction = () => {
  return (
    <Section>
      <Grid container spacing={12}>

        <Grid item xs={12} sm={6}>
          <Text display bold p>Warm greetings from Figure Press. We are an independent publishing project interested in sustaining practices for thinking, making, and collaborating. Primarily, we're interested in how the form of the book, and the processes of its production, can enable delicate new ideas to take shape.</Text>
          <Text display bold>We publish small editions of hand made books in order to enable a slow and long-form process.</Text>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Text display bold p>To purchase a book contact us via email or on instagram.</Text>
          <a href="mailto:figurepress@gmail.com"><Text display bold>figurepress@gmail.com</Text></a>
          <a href="https://www.instagram.com/figurepress/"><Text display bold>@figurepress</Text></a>
        </Grid>

      </Grid>
    </Section>
  )
}

export default Introduction
