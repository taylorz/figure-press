import { useEffect } from "react"
import styled from 'styled-components'

import { useShopify } from "../hooks"
import {
  PageContainer,
  Grid,
  Section,
  Text
} from '../components/ui'
import CartItem from '../components/CartItem'

const StyledBottomSection = styled(Section)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 ${({ theme }) => theme.util.buffer*2}px;
`;

const Cart = ({}) => {
  const {
    checkoutState,
    cartCount
  } = useShopify()

  const openCheckout = (e) => {
    e.preventDefault()
		window.location.replace(checkoutState.webUrl) // opens checkout in same window
  }

  return (
    <PageContainer>

      <Section isPageTop>
        <Grid container style={{height: '100%'}}>

          <Grid item xs={12} sm={6} />

          <Grid item xs={12} sm={6}>
            <Text bold p>Cart</Text>
            <Grid container>
              {cartCount ?
                checkoutState.lineItems.map((l, i) =>
                  <Grid item key={i} xs={12}>
                    <CartItem
                      title={l.title}
                      price={l.variant.price}
                      quantity={l.quantity}
                      lineItemId={l.id}
                    />
                  </Grid>
                )
              :
                <Grid item>
                  <Text lightened>Your cart is empty.</Text>
                </Grid>
              }
            </Grid>
          </Grid>

        </Grid>
      </Section>

      {cartCount ?
        <StyledBottomSection noMarginBottom>
          <Grid container style={{height: '100%'}} >
            <Grid item xs={12} sm={6} />
            <Grid item xs={12} sm={6}>
              <Grid container justifyContent="space-between">
                <Grid item>
                  <Grid container spacing={2}>
                    <Grid item>
                      <Text>Subtotal</Text>
                    </Grid>
                    <Grid item>
                      <Text>${checkoutState.subtotalPrice}</Text>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Text link onClick={(e) => openCheckout(e)}>Checkout</Text>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </StyledBottomSection>
      : null}

    </PageContainer>
  )
}

export default Cart
