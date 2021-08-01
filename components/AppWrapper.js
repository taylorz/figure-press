import { useEffect } from 'react'
import Cookies from 'universal-cookie';

import { useShopify } from "../hooks"

const AppWrapper = ({children}) => {

  const cookies = new Cookies();

  const {
		createShop,
		createCheckout,
		fetchProducts,
    // checkoutState
		// fetchCollection,
	} = useShopify()

	useEffect(() => {
		createShop()
		fetchProducts()
		createCheckout()
		// fetchCollection()
	}, [])

  // useEffect(() => {
  //   cookies.set('checkoutCookie', checkoutState, { path: '/' });
  //   console.log(cookies.get('checkoutCookie'))
  // }, [checkoutState])

  return (
    <>{children}</>
  )
}

export default AppWrapper
