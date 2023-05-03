import {  useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import {IMG_CDN_URL} from "./constants"

const RestaurantMenu = () => {
      // how to read a dynamic URL params
      const { id } = useParams();
      
      const [restaurant, setRestauraunt] = useState({});
      const [restaurantDetail, setRestaurantDetail]= useState([])
    
      useEffect(() => {

        getRestaurantInfo();
      }, [])
    
      async function getRestaurantInfo() {
        const data = await fetch(
          "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9261382&lng=77.62210910000002&restaurantId=" +
            id
        );
        const json = await data.json();
     
        setRestauraunt(json.data.cards[0].card.card.info);

          const card = json?.data?.cards[2]?.groupedCard?.cardGroupMap.REGULAR.cards.slice(1)      
         
          const result = card.map(x=>x.card.card.itemCards)

          // const finalMenu = result[0].map(x=>x.card.info.name)    
          const finalMenu= [...result].flatMap(subArray => subArray?.map(x => x.card.info.name)).slice(0, -2);
          setRestaurantDetail(finalMenu)

            }


    return (
      <>
        <div>
            <h1>Restraunt id: {id} </h1>
            <h2>Restraunt Name is {restaurant.name}</h2>
            <img src={IMG_CDN_URL+ restaurant.cloudinaryImageId} alt="no-img"></img>
            <h3>restaurant area is {restaurant.areaName}</h3>
            <h3>restaurant city name is { restaurant.city }</h3>
            <h3>restaurant city avgRating { restaurant.avgRating }</h3>
            <h3>restaurant cost for two { restaurant.costForTwoMessage }</h3>
        </div>
        <div>
          <h1>Menu Items</h1>
          <ul>
            {
                restaurantDetail.map((items, index)=> <li key={index}>{items}</li>)
            }
          </ul>
        </div>
        </>
    )
}
export default RestaurantMenu