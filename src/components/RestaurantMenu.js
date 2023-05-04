import {  useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import {FETCH_MENU_URL, IMG_CDN_URL} from "./constants"
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
      // how to read a dynamic URL params
      const { id } = useParams();
      const {restaurant, restaurantDetail} = useRestaurant(id)
      

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