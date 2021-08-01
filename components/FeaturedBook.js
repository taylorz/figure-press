import { useEffect, useState } from "react"
import styled from "styled-components"

import { useShopify } from "../hooks"
import {
  Grid,
  Section,
  Text
} from '../components/ui'
import Slideshow from '../components/Slideshow'

const StyledBookDescription = styled(Grid)`
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}px) {
    flex-direction: column-reverse;
  }
`;
const StyledDescriptionText = styled(Text)`
  br {
    display: block;
    margin-bottom: 20px;
  }
`;

const FeaturedBook = ({
  productId,
  images,
  title,
  author,
  price,
  description
}) => {

  const {
    checkoutState,
    addVariant,
    product,
    fetchProduct,
  } = useShopify()

  const [currentBookImage, setCurrentBookImage] = useState(0)
  const [size, setSize] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [addedToCart, setAddedToCart] = useState(false)

  const defaultSize = product.variants && product.variants[0].id.toString()

  const addToCart = (sizeId, quantity) => {
    if (sizeId === "") {
      sizeId = defaultSize
			const lineItemsToAdd = [
        { variantId: sizeId, quantity: parseInt(quantity, 10) },
			]
			const checkoutId = checkoutState.id
			addVariant(checkoutId, lineItemsToAdd)
		} else {
      const lineItemsToAdd = [
        { variantId: sizeId, quantity: parseInt(quantity, 10) },
			]
			const checkoutId = checkoutState.id
			addVariant(checkoutId, lineItemsToAdd)
		}
    setAddedToCart(true)
    setTimeout(() => {
      setAddedToCart(false)
    }, 1500)
  }

  useEffect(() => {
		fetchProduct(productId)
	}, [productId])

  // console.log({cartStatus})
  // console.log({cartCount})
  // console.log(checkoutState.lineItems[0])
  // console.log({addedToCart})


  return (
    <Section>

      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <Slideshow
            images={images}
            currentBookImage={currentBookImage}
            setCurrentBookImage={setCurrentBookImage}
          />
        </Grid>
      </Grid>

      <Grid container mt={2} flexDirection="row">
        <Grid item xs={12} sm={4}>
          <Text>{currentBookImage + 1} of {images.length}</Text>
        </Grid>
        <Grid item xs={12} sm={4} alignItems="center">
          <Text bold>{title}</Text>
          <Text italic>Matthew Ransom, Taylor Zanke</Text>
          <Text>${price}</Text>
        </Grid>
        <Grid item xs={12} sm={4} alignItems="flex-end" justifyContent="flex-end">
            {addedToCart ?
              <Text lightened>
                Added to cart
              </Text>
            :
              <Text link onClick={(e) => addToCart(size, quantity)}>
                Add to cart
              </Text>
            }
        </Grid>
      </Grid>

      <StyledBookDescription container mt={2} flexDirection="row">
        <Grid item xs={12} sm={6} mb={2}>
          <Text>122 Pages</Text>
          <Text>7.5 x 5 inches</Text>
          <Text>First Edition of 100</Text>
          <Text>ISBN 978-1-7372541-9-2</Text>
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledDescriptionText display p>{description}</StyledDescriptionText>
          {/* <Text display p>The photographs here were taken by both of us over the span of several years, well before we had ever discussed them with one another, and well before we had the idea of developing them into a book. Indeed, the images are simply documentations of experience, evidence of impulses, the result of not not being able to photograph a condition before us.</Text>
          <Text display p>At first, our focus was entirely on the subject matter of the photographs themselves: images of trees, grass, window frames, flowers, or an open car door. As we looked at them together, the sense of a slowly gathering, shared quality in the photographs encouraged a more deliberate comparison.</Text> */}
        </Grid>
      </StyledBookDescription>

    </Section>
  )
}

export default FeaturedBook
