import {
  PageContainer,
  Grid,
  Text
} from '../components/ui'

const Cart = ({}) => {

  return (
    <PageContainer>
      <Grid container style={{height: '100%'}}>

        <Grid item xs={12} sm={6} />

        <Grid item xs={12} sm={6}>
          <Text bold>Cart</Text>
        </Grid>

      </Grid>
    </PageContainer>
  )
}

export default Cart
