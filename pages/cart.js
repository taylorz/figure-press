import { useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
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
		window.open(checkoutState.webUrl)
  }

  return (
    <PageContainer>

      <Section isPageTop>
        <Grid container style={{height: '100%'}}>

          <Grid item xs={12} sm={6} />

          <Grid item xs={12} sm={6}>
            <Text bold p>Cart</Text>
            <Grid container>

              <AnimatePresence exitBeforeEnter>
                {cartCount &&
                  checkoutState.lineItems.map((l, i) =>
                    <motion.div
                      key={cartCount}
                      initial={{opacity: 0}}
                      animate={{opacity: 1}}
                      exit={{opacity: 0}}
                      transition={{duration: .25}}
                      style={{width: '100%'}}
                    >
                      <Grid item key={i} xs={12}>
                        <CartItem
                          title={l.title}
                          price={l.variant.price}
                          quantity={l.quantity}
                          lineItemId={l.id}
                        />
                      </Grid>
                    </motion.div>
                  )
                }
              </AnimatePresence>

              <AnimatePresence exitBeforeEnter>
                {!cartCount &&
                  <motion.div
                    key={cartCount}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: .25}}
                    style={{width: '100%', position: 'absolute'}}
                  >
                    <Grid item>
                      <Text lightened>Your cart is empty.</Text>
                    </Grid>
                  </motion.div>
                }
              </AnimatePresence>

            </Grid>
          </Grid>

        </Grid>
      </Section>

      <AnimatePresence exitBeforeEnter>
        {cartCount ?
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: .25}}
          >
            <StyledBottomSection smallMarginBottom>
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
          </motion.div>
        : null
        }
      </AnimatePresence>

    </PageContainer>
  )
}

export default Cart
