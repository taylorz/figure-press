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

  const {
		createShop,
		createCheckout,
		fetchProducts,
		// fetchCollection,
	} = useShopify()

	useEffect(() => {
		createShop()
		fetchProducts()
		createCheckout()
		// fetchCollection()
	}, [])

  const { products, fetchProduct } = useShopify()

  console.log({products})

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
