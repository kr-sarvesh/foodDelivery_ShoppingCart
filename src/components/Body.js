import { useState } from "react"
import resList from "../utils/mockData"
import RestaurantCard from "./RestaurantCard"



const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState(resList)
  
  const filterHandler=()=>{
  const filterList = listofRestaurants.filter((res)=>res.data.avgRating>4)
  setlistofRestaurants(filterList)
  }
    
    return (
      <div className='body'>
        <div className='search'>Search</div>
        <button className="filter"
        onClick={filterHandler}
        >Filter</button>
      <div className='res-container'>
        {listofRestaurants.map((restaurant)=>(
          <RestaurantCard key={restaurant.data.id} {...restaurant.data}/>
        ))}
      </div>
      </div>
    )
  }
  export default Body