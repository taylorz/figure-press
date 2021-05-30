import styled from "styled-components"
import { AnimatePresence } from "framer-motion"

const StyledLayout = styled.div`

`;

const Layout = ({ children }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <StyledLayout>
          {children}
      </StyledLayout>
    </AnimatePresence>
  )
}

export default Layout
