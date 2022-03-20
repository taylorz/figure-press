import {
  Grid,
  Text,
  Section
} from './ui'

const Team = () => {
  return (
    <Section>
      <Grid container spacing={12}>
        <Grid item xs={12} sm={6}>
          <Text bold display p>Matthew Ransom, Editor</Text>
          <Text bold display p>Matthew Ransom is an architectural designer and photographer working on exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
          <Text bold display>overhead.nyc</Text>
          <Text bold display>@matthewransom</Text>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Text bold display p>Taylor Zanke, Designer</Text>
          <Text bold display p>Taylor Zanke is an artist and designer working on exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
          <Text bold display>taylorzanke.com</Text>
          <Text bold display>@taylorzanke</Text>
        </Grid>
      </Grid>
    </Section>
  )
}

export default Team
