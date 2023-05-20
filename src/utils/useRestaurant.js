import { useEffect, useState } from 'react'
import { MenuItems } from '../components/constants'

const useRestaurant = (id) => {
  const [restaurant, setRestauraunt] = useState({})
  const [restaurantDetail, setRestaurantDetail] = useState(null)

  useEffect(() => {
    getRestaurantInfo()
  }, [])

  async function getRestaurantInfo() {
    const data = await fetch(MenuItems + id + '&submitAction=Enter')
    const json = await data.json()

    setRestauraunt(json?.data?.cards[0]?.card?.card?.info)

    const card =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.slice(1)

    const result = card?.map((x) => x.card.card.itemCards)

    // console.log(Object.values(...card)?.map((x) => x))
    // console.log()
    //   [...result]?.map((subArray) => subArray?.map((x) => x?.card?.info))
    // )

    // console.log(result)
    // const finalMenu = result[0].map(x=>x.card.info.name)

    const menuItems = [...result]
      ?.map((subArray) => subArray?.map((x) => x?.card?.info))
      ?.slice(0, -2)
    const finalMenu = menuItems?.map((x) => x)?.flat()

    console.log(finalMenu)

    setRestaurantDetail(finalMenu.filter((x) => x !== undefined))
  }

  return { restaurant, restaurantDetail }
}
export default useRestaurant
