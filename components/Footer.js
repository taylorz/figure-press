import {
  Section,
  Grid,
  Text
} from "../components/ui"

const Footer = ({ ...rest }) => {
  return (
    <Section noMarginBottom>
      <Grid container>
        <Grid item xs={12} sm={6} />
        <Grid item xs={12}sm={6}>
          <Text>Figure Press is a collaboration between Matthew Ransom and Taylor Zanke.</Text>
          <Text>Copyright &copy; Figure Press 2021</Text>
        </Grid>
      </Grid>
    </Section>
  )
}

export default Footer
