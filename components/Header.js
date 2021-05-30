import styled from "styled-components"
import Link from "next/link"

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

const Footer = ({ ...rest }) => {
  return (
    <Maxwidth>
      <StyledHeader container spacing={2}>
        <Grid item>
          <Link href="/"><Text bold hoverable>Figure Press</Text></Link>
        </Grid>
        <Grid item>
          <Link href="/cart"><Text lightened hoverable>Cart</Text></Link>
        </Grid>
        <Grid item>
          <Text link>Order <Text italic link>Figures</Text></Text>
        </Grid>
      </StyledHeader>
    </Maxwidth>
  )
}

export default Footer
