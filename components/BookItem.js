
import {
  Grid,
  Text
} from './ui'

const BookItem = () => {
  const FiguresCover = '/assets/images/figures-cover.png'

  return (
    <Grid container flexDirection="column" spacing={4}>

      <Grid item>
        <Text bold>FP 1</Text>
        <Text bold>Figures</Text>
        <Text bold>Matthew Ransom, Taylor Zanke</Text>
      </Grid>
      <Grid item>
        <Text bold>Edition of 100</Text>
        <Text bold>122 Pages, 7 x 7.5 inches</Text>
        <Text bold>ISBN 978-1-7272541-0-1</Text>
      </Grid>
      <Grid item>
        <Text bold>$32.00</Text>
      </Grid>

      <Grid item>
        <img src={FiguresCover} style={{width: '100%'}} />
      </Grid>
    </Grid>
  )
}

export default BookItem
