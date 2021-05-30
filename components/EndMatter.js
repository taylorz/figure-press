import Link from "next/link"

import {
  Grid,
  Section,
  Text
} from "../components/ui"

const EndMatter = ({ ...rest }) => {
  return (
    <Section>

      <Grid container>

        <Grid item xs={12} sm={6} />

        <Grid item xs={12} sm={6}>
          <Grid container spacing={4}>

            <Grid item xs={12}>
              <Text display italic p>One day, quite some time ago, I happened on a photograph of Napoleon’s youngest brother, Jerome, taken in 1852. And I realized then, with an amazement I have not been able to lessen since: ‘I am looking at eyes that looked at the Emperor.’ Sometimes I would mention this amazement, but since no one seemed to share it, nor even to understand it (life consists of these little touches of solitude), I forgot about it.</Text>
              <Text>Roland Barthes, Camera Lucida: Reflections on Photography</Text>
            </Grid>

            <Grid item xs={12}>
              <Grid container>
                <Grid item>
                  <Text bold p>Contact</Text>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12} sm={4}><Text italic>Instagram</Text></Grid>
                <Grid item xs={12} sm={8}><a href="https://instagram.com/figurepress" target="_blank"><Text link>@figurepress</Text></a></Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Grid container>
                <Grid item>
                  <Text bold p>Subscribe</Text>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12} sm={4}><Text italic>Subscribe to our Newsletter</Text></Grid>
                <Grid item xs={12} sm={8}><Text lightened>Your email</Text></Grid>
              </Grid>
            </Grid>

            {/* <Grid item xs={12}>
              <Grid container>
                <Grid item>
                  <Text bold p>Friends of Figure Press</Text>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12}><Text>Brilliant Graphics</Text></Grid>
              </Grid>
            </Grid> */}

          </Grid>
        </Grid>

      </Grid>

    </Section>
  )
}

export default EndMatter
