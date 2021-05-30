import {
  PageContainer,
  Section
} from '../components/ui'
import Introduction from '../components/Introduction'
import FeaturedBook from '../components/FeaturedBook'
import EndMatter from '../components/EndMatter'

const Homepage = ({}) => {

  return (
    <PageContainer>

      <Introduction />
      <FeaturedBook />
      <EndMatter />

    </PageContainer>
  )
}

export default Homepage
