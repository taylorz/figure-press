import { useEffect } from 'react'
import { useShopify } from "../hooks"
import {
  PageContainer
} from '../components/ui'
import Introduction from '../components/Introduction'
import FeaturedBook from '../components/FeaturedBook'
import EndMatter from '../components/EndMatter'
import Footer from "../components/Footer"

const Homepage = ({}) => {

  const { products, fetchProduct, cartStatus, cartCount } = useShopify()

  // console.log({products})
  // console.log({cartCount})

  return (

    <PageContainer>

      <Introduction />
      {products.map((p, i) =>
        <FeaturedBook
          productId={p.id}
          images={p.images}
          title={p.title}
          price={p.variants[0].price}
          description={p.description}
          // author={p.}
        />
      )}
      <EndMatter />
      <Footer />

    </PageContainer>

  )
}

export default Homepage
