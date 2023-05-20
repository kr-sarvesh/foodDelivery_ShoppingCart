import { useParams } from 'react-router-dom'
import { IMG_CDN_URL } from './constants'
import useRestaurant from '../utils/useRestaurant'
import { addItem } from '../utils/cartSlice'
import { useDispatch } from 'react-redux'

const RestaurantMenu = () => {
  // how to read a dynamic URL params
  const { id } = useParams()

  const { restaurant, restaurantDetail } = useRestaurant(id)

  const dispatch = useDispatch()
  // dispatch action to add item to cart
  const addFoodItem = (item) => {
    dispatch(addItem(item))
  }

  return (
    <div className='container mx-auto px-6'>
      <div className='card lg:card-side bg-base-100 shadow-xl'>
        <div className='flex flex-col'>
          <div className='flex  gap-10'>
            <span>
              <img
                className='w-[500px]'
                src={IMG_CDN_URL + restaurant.cloudinaryImageId}
                alt='no-img'
              ></img>
            </span>
            <div className='border w-[500px]'>
              <h1 className='text-center'>Menu Items Available</h1>
              {restaurantDetail?.map((item, index) => (
                <li className='list-none pl-2' key={index}>
                  {item?.name}
                  <button
                    className='btn btn-primary
                      ml-4
                    btn-outline btn-xs'
                    onClick={() => addFoodItem(item)}
                  >
                    Add
                  </button>
                </li>
              ))}
            </div>
            <div>
              <h1>Restraunt Id: {id} </h1>
              <h1>Restraunt Name is {restaurant?.name}</h1>
              <h1>Restaurant Area is {restaurant?.areaName}</h1>
              <h1>Restaurant City name is {restaurant?.city}</h1>
              <h1>Restaurant AvgRating {restaurant?.avgRating}</h1>
              <h1>Restaurant cost for two {restaurant?.costForTwoMessage}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default RestaurantMenu
