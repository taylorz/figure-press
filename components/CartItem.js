import { useEffect, useState } from "react"
import styled from "styled-components"

import { useShopify } from "../hooks"
import {
  Grid,
  Section,
  Text
} from '../components/ui'

const StyledCartItem = styled(Grid)``;

const CartItem = ({
  title,
  price,
  quantity,
  lineItemId
}) => {
  const { checkoutState, updateQuantity, removeLineItem } = useShopify()

  const deleteLineItem = (lineItemId, e) => {
    e.preventDefault(e)
    const checkoutId = checkoutState.id
    removeLineItem(checkoutId, lineItemId)
    updateQuantity(lineItemId, 0, checkoutId)
  }

  return (
    <StyledCartItem container justifyContent="space-between">
      <Grid item>
        <Grid container spacing={2}>
          <Grid item>
            <Text>{quantity}</Text>
          </Grid>
          <Grid item>
            <Text>{title}</Text>
          </Grid>
          <Grid item>
            <Text>${price}</Text>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Text lightened hoverable onClick={(e) => deleteLineItem(lineItemId, e)}>Remove</Text>
      </Grid>
    </StyledCartItem>
  )
}

export default CartItem
