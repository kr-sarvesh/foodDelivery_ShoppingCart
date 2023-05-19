import { useSelector } from 'react-redux'

const Cart = () => {
  //getting cart items from redux store
  // subscribing the specific portion of the cart
  const cartItems = useSelector((store) => store.cart.cartItems)

  console.log('cartItems', cartItems)

  return (
    <>
      <h1 className='font-bold text-3xl'>Cart-Items - {cartItems.length} </h1>
      <h3>{cartItems.name}</h3>
    </>
  )
}
export default Cart
