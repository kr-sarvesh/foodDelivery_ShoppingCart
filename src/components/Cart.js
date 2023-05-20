import { useDispatch, useSelector } from 'react-redux'
import FoodItem from './FoodItem'
import { clearCart } from '../utils/cartSlice'

const Cart = () => {
  //getting cart items from redux store
  // subscribing the specific portion of the cart
  const cartItems = useSelector((store) => store.cart.cartItems)
  const Items = Object.values(cartItems)
  const Item = [...Items].map((item) => item)

  const dispatch = useDispatch()
  // dispatch action to add item to cart
  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <>
      <div className='container mx-auto relative'>
        <h4 className='font-bold text-3xl px-6'>
          Total-Items - {Item.length}{' '}
        </h4>
        <button
          className='btn btn-primary absolute top-5 right-5 '
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </button>
        <div className='container mx-auto'>
          <FoodItem item={Item} />
        </div>
      </div>
    </>
  )
}
export default Cart
