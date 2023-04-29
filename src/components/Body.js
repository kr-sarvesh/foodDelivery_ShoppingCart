import { useState } from "react"
import resList from "../utils/mockData"
import RestaurantCard from "./RestaurantCard"
    
    const Body = () => {
      const [restaurants, setRestaurants] = useState(resList);
      const [searchText, setSearchText] = useState("");

      function filterData(searchText, restaurants) {
        const filterData = restaurants.filter((restaurant) =>
          restaurant.data.name.includes(searchText)
        );
      
        return filterData;
      }
    
      return (
        <div className="Body">
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="search-btn"
              onClick={() => {
                //need to filter the data
                const data = filterData(searchText,restaurants);
                // update the state - restaurants
                setRestaurants(data);
              }}
            >
              Search
            </button>
          </div>
          <div className="res-container">
            {restaurants.map((restaurant) => {
              return (
                <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
              );
            })}
          </div>
        </div>
      );
    };
    
    export default Body;