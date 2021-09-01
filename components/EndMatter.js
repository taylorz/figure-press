import Link from "next/link"

import {
  Grid,
  Section,
  Text
} from "../components/ui"
import Newsletter from "../components/Newsletter"

const EndMatter = ({ ...rest }) => {
  return (
    <Section>

      <Grid container>

        <Grid item xs={12} sm={6} />

        <Grid item xs={12} sm={6}>
          <Grid container spacing={4}>

            <Grid item xs={12}>
              <Text display italic p>…the book creates meaning, the meaning creates life.</Text>
              <Text>Roland Barthes, The Pleasure of the Text</Text>
            </Grid>

            <Grid item xs={12}>
              <Grid container>
                <Grid item>
                  <Text bold p>Contact</Text>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={6} sm={4}><Text italic>Instagram</Text></Grid>
                <Grid item xs={6} sm={8}><a href="https://instagram.com/figurepress" target="_blank"><Text link>@figurepress</Text></a></Grid>
              </Grid>
              <Grid container>
                <Grid item xs={6} sm={4}><Text italic>Email</Text></Grid>
                <Grid item xs={6} sm={8}><a href="mailto:figurepress@gmail.com"><Text link>figurepress@gmail.com</Text></a></Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Grid container>
                <Grid item>
                  <Text bold p>Subscribe</Text>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12} sm={4}><Text italic>Sign up for our newsletter</Text></Grid>
                <Grid item xs={12} sm={8}><Newsletter /></Grid>
              </Grid>
            </Grid>

          </Grid>
        </Grid>

      </Grid>

    </Section>
  )
}

export default EndMatter
