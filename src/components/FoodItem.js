import { IMG_CDN_URL } from './constants'
const FoodItem = ({ item }) => {
  console.log(item)
  return (
    <div className='container mx-auto'>
      <div className='p-4 m-2 flex gap-10'>
        {item?.map((item, id) => (
          <li
            className='list-none cursor-pointer w-60  mb-6 border shadow-lg bg-pink '
            key={id}
          >
            <img src={IMG_CDN_URL + item.imageId} alt='noimg' />
            <div className='p-2'>
              <h2 className='font-semibold'>{item.name}</h2>
              <p>{item.description}</p>
              <p className='font-semibold pt-2'>
                Price is: Rs.{item.price / 100}
              </p>
            </div>
          </li>
        ))}
      </div>
    </div>
  )
}
export default FoodItem
