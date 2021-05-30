import {
  PageContainer,
  Grid,
  Section,
  Text
} from '../components/ui'

const Cart = ({}) => {

  return (
    <PageContainer>
      <Section isPageTop>
        <Grid container style={{height: '100%'}}>

          <Grid item xs={12} sm={6} />

          <Grid item xs={12} sm={6}>
            <Text bold p>Cart</Text>
            <Text lightened>Your cart is empty.</Text>
          </Grid>

        </Grid>
      </Section>
    </PageContainer>
  )
}

export default Cart
