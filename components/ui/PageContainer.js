import styled from "styled-components"

const StyledPageContainer = styled.div`
  overflow-x: hidden;
  padding: ${({ theme }) => theme.util.buffer * 12}px 0;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}px) {
    padding: ${({ theme }) => theme.util.buffer * 4}px 0;
  }
`;

const PageContainer = ({ children }) => {
  return (
    <StyledPageContainer>{children}</StyledPageContainer>
  )
}

export default PageContainer
