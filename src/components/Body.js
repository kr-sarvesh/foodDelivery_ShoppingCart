import { useState, useEffect } from 'react'
import RestaurantCard from './RestaurantCard'
import { Link } from 'react-router-dom'
import Shimmer from './Shimmer'
import useOnline from '../utils/useOnline'

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  )

  return filterData
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([])
  const [filteredRestaurants, setFilteredRestaurants] = useState([])
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    getRestaurants()
  }, [])

  async function getRestaurants() {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING'
    )
    const json = await data.json()
    console.log(json)
    // Optional Chaining
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
  }

  const online = useOnline()

  if (!online) {
    return <h1>Offline, please check your internet connection</h1>
  }

  // not render component(early return)
  if (!allRestaurants) return null

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className='container mx-auto flex flex-col px-6 '>
      {/* Search container */}
      <div>
        {/* Search Starts from Here */}

        <input
          type='text'
          className=' px-6 pt-2 pb-2 mb-4 mt-4 ml-4 rounded-lg border-2 border-black focus:outline-none caret-red-700 mr-3 md:mb-2
              '
          placeholder='Search'
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value)
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const data = filterData(searchText, allRestaurants)
              setAllRestaurants(data)
            }
          }}
        />
        <button
          className='inline-flex
               px-6 py-3 font-semibold 
               text-center duration-200 transform rounded-lg 
               focus:outline-none bg-orange-300 hover:opacity-80'
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, allRestaurants)
            // update the state - restaurants
            setFilteredRestaurants(data)
          }}
        >
          Search
        </button>
      </div>

      <div className='container  flex flex-wrap justify-between '>
        {/* js Expression works here */}
        {filteredRestaurants.length === 0 ? (
          <h1>No Filter found</h1>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={'/restaurant/' + restaurant.data.id}
                key={restaurant.data.id}
              >
                <RestaurantCard {...restaurant.data} />
              </Link>
            )
          })
        )}
      </div>
    </div>
  )
}

export default Body
