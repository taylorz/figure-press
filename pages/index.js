import Head from 'next/head'
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

  // const ogImg = products[0].images[0].src

  // console.log(products[0].images[0].src)
  // console.log({cartCount})
  // console.log("ogImg", ogImg)

  return (

    <>

      <Head>
        <title>Figure Press</title>
        <meta name="title" content="Figure Press" />
        <meta property="og:site_name" content="Figure Press" key="og_fp_site_name" />
        <meta name="description" content="Figure Press is a publishing project that uses the form of the book, and the processes of its production, to develop and sustain practices for thinking, making, and collaborating." />
        <meta name="keywords" content="Books, Artist Books, Publishing, Art Publishing, Publisher, Photography, Graphic Design, Design" />
        <meta property="og:title" content="Figure Press" key="og_fp_site_title" />
        <meta property="og:description" content="Figure Press is a publishing project that uses the form of the book, and the processes of its production, to develop and sustain practices for thinking, making, and collaborating." key="og_fp_site_description" />
        {/* <meta property="og:image" content={products[0].images[0].src} key="og_fp_site_image" /> */}
      </Head>

      <PageContainer>

        <Introduction />

      </PageContainer>

    </>


  )
}

export default Homepage
