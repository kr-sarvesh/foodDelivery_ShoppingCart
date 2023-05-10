import { useParams } from 'react-router-dom'
import { IMG_CDN_URL } from './constants'
import useRestaurant from '../utils/useRestaurant'

const RestaurantMenu = () => {
  // how to read a dynamic URL params
  const { id } = useParams()
  const { restaurant, restaurantDetail } = useRestaurant(id)

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
              <ul>
                {restaurantDetail.map((items, index) => (
                  <li key={index} className=''>
                    {items}
                  </li>
                ))}
              </ul>
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
