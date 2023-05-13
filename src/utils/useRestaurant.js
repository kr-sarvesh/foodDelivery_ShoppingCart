import { useEffect, useState } from 'react'
import { FETCH_MENU_URL } from '../components/constants'

const useRestaurant = (id) => {
  const [restaurant, setRestauraunt] = useState({})
  const [restaurantDetail, setRestaurantDetail] = useState([])

  useEffect(() => {
    getRestaurantInfo()
  }, [])

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + id)
    const json = await data.json()

    setRestauraunt(json.data.cards[0].card.card.info)

    const card =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap.REGULAR.cards.slice(1)

    const result = card.map((x) => x.card.card.itemCards)

    // const finalMenu = result[0].map(x=>x.card.info.name)

    const finalMenu = [...result]
      .flatMap((subArray) => subArray?.map((x) => x.card.info.name))
      .slice(0, -2)

    setRestaurantDetail(finalMenu)
  }
  //return restraunt Data

  return { restaurant, restaurantDetail }
}
export default useRestaurant
