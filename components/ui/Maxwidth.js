import styled from "styled-components"

const StyledMaxwidth = styled.div`
  max-width: ${({ theme }) => theme.breakpoint.md}px;
  padding: 0 ${({ theme }) => theme.util.buffer * 6}px;
  margin: 0 auto;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}px) {
    padding: 0 ${({ theme }) => theme.util.buffer * 4}px;
  }
`;

const Maxwidth = ({ children }) => {
  return (
    <StyledMaxwidth>{children}</StyledMaxwidth>
  )
}

export default Maxwidth
