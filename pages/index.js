import {
  PageContainer,
  Section
} from '../components/ui'
import Introduction from '../components/Introduction'
import FeaturedBook from '../components/FeaturedBook'
import EndMatter from '../components/EndMatter'
import Footer from "../components/Footer"

const Homepage = ({}) => {

  return (
    <PageContainer>

      <Introduction />
      <FeaturedBook />
      <EndMatter />
      <Footer />

    </PageContainer>
  )
}

export default Homepage
