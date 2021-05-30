import { useEffect } from "react"
import styled from "styled-components"
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'

import Maxwidth from "./Maxwidth"

const StyledSection = styled.div`
  margin-bottom: ${props => props.noMarginBottom ? props.theme.util.buffer * 2 : props.theme.util.buffer * 30}px;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}px) {
    margin-top: ${props => props.isPageTop && props.theme.util.buffer * 4}px;
  }
`;

const Section = ({ children, ...rest }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const sectionAnimation = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1
    }
  }

  return (
    <motion.div
      ref={ref}
      variants={sectionAnimation}
      animate={controls}
      initial="hidden"
    >
      <Maxwidth>
        <StyledSection {...rest}>{children}</StyledSection>
      </Maxwidth>
    </motion.div>
  )
}

export default Section
