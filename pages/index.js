import Head from 'next/head'
import { useMediaQuery } from 'react-responsive'
import { theme } from '../styles/theme'

import {
  PageContainer,
  Grid,
  Section
} from '../components/ui'
import Introduction from '../components/Introduction'
import BookItem from '../components/BookItem'
import Team from '../components/Team'
import Footer from '../components/Footer'

const Homepage = ({}) => {
  const isXs = useMediaQuery(
    { maxWidth: theme.breakpoint.xs },
  )

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

        <Introduction isXs={isXs}/>

        <Section>
          <Grid container spacing={12}>
            <Grid item xs={12} sm={4}>
              <BookItem />
            </Grid>
          </Grid>
        </Section>

        {/* <Team /> */}

        <Footer />

      </PageContainer>

    </>


  )
}

export default Homepage
