import {
  Section,
  Grid,
  Text
} from "../components/ui"

const Footer = () => {
  return (
    <Section noMarginBottom>
      <Grid container>
        <Grid item xs={12} sm={6} mt={24}>
          <Text bold>Copyright &copy; Figure Press {new Date().getFullYear()}</Text>
        </Grid>
      </Grid>
    </Section>
  )
}

export default Footer
