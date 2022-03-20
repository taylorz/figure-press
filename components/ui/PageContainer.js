import styled from "styled-components"
import Div100vh from 'react-div-100vh'

const StyledPageContainer = styled(Div100vh)`
  height: 100vh;
  min-height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: ${({ theme }) => theme.util.buffer * 12}px 0;
`;

const PageContainer = ({ children }) => {
  return (
    <StyledPageContainer>{children}</StyledPageContainer>
  )
}

export default PageContainer
