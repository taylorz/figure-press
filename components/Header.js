import { useEffect } from "react"
import styled from "styled-components"
import Link from "next/link"

import { useShopify } from "../hooks"

import {
  Maxwidth,
  Grid,
  Text
} from "../components/ui"

const StyledHeader = styled(Grid)`
  margin-top: ${({ theme }) => theme.util.buffer}px;
  position: fixed;
  z-index: 2;
`;

const Header = ({ ...rest }) => {

  const { cartCount, cartStatus, checkoutState, setCount } = useShopify()

  const handleOpen = (e) => {
    e.preventDefault()
    openCart()
  }
  const handleClose = (e) => {
    e.preventDefault()
    closeCart()
  }

  useEffect(() => {

		const getCount = () => {
			let lineItems =
				checkoutState.lineItems && checkoutState.lineItems.length > 0
					? checkoutState.lineItems
					: []
			let count = 0
			lineItems.forEach((item) => {
				count += item.quantity
				return count
			})
			setCount(count)
		}
		getCount()

  }, [cartStatus, checkoutState])

  // console.log("header, checkoutState", checkoutState.lineItems[0])

  return (
    <Maxwidth>
      <StyledHeader container spacing={2}>
        <Grid item>
          <Link href="/">
            <Text bold hoverable>Figure Press</Text>
          </Link>
        </Grid>
        <Grid item>
          <Link href="/cart">
            <Text lightened={!cartCount} link={cartCount} hoverable>Cart {cartCount ? `( ${cartCount} )` : null}</Text>
          </Link>
        </Grid>
        <Grid item>
          <Link href="/#figures" scroll={false}>
            <Text link><Text italic link>Figures</Text> is out now!</Text>
          </Link>
        </Grid>
      </StyledHeader>
    </Maxwidth>
  )
}

export default Header
