// Resuable Card
const RestaurantCard = (props) => {
  // Destructure of Props
  console.log('props recieved' + props)
  // const {resData} = props

  return (
    <div className='container mx-auto my-12  md:px-12 '>
      {/* Article */}
      <article className='overflow-hidden border border-black rounded-lg shadow-lg w-[250px]'>
        <img
          className='object-cover w-[150px] h-full rounded-[10px] z-0'
          src={
            'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/' +
            props.cloudinaryImageId
          }
          alt='no-Img'
        />
        <header className='flex items-center justify-between leading-tight p-2 md:p-4'>
          <h1 className='text-lg'>
            Restaurant Name:{' '}
            <span className='no-underline hover:underline text-black'>
              {props.name}
            </span>
          </h1>
        </header>
        <section className='flex items-center flex-wrap justify-between leading-none p-2 md:px-4'>
          <span className='flex items-center no-underline hover:underline text-black'>
            <p className='ml-2 text-sm'>
              Cuisines{''} {props.cuisines.join(', ')}
            </p>
            <p className='ml-2 text-sm'>
              Rating{''} {props.avgRating} Stars
            </p>
          </span>
        </section>
        <section
          className='flex items-center flex-wrap justify-between
    
      leading-none p-2 md:p-4 '
        >
          <span className='flex items-center no-underline hover:underline text-black'>
            <p className='ml-2 text-sm'>₹{props?.costForTwo / 100} FOR TWO </p>
            <p className='ml-2 text-sm'>
              Delivery In: {props?.minDeliveryTime} Minutes
            </p>
          </span>
        </section>
      </article>
    </div>
  )
}

export default RestaurantCard
