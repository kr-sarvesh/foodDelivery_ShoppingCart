
import { Link } from "react-router-dom"
// Resuable Card
const RestaurantCard = (props)=> {
    // Destructure of Props
    // console.log(props);
    // const {resData} = props  
  
  
    return(
      <div className='container mx-auto my-12  md:px-12 '>
            
   {/* Aircle */}
     <article className="overflow-hidden border border-black rounded-lg shadow-lg w-[250px]">
      <Link to="#" className="">
      <img 
      className='object-cover w-[150px] h-full rounded-[10px] z-0'
      src={'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/'+ props.cloudinaryImageId }
      alt='no-Img'
    />      </Link>
    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
      <h1 className="text-lg">Restaurant Name: {" "} 
        <Link to="#" className="no-underline hover:underline text-black">
        {props.name}
        </Link>
      </h1>
    </header>
      <section className="flex items-center flex-wrap justify-between leading-none p-2 md:px-4">
        <Link to="#" className="flex items-center no-underline hover:underline text-black">
        <p className="ml-2 text-sm">
        Cuisines{""} {props.cuisines.join(", ")}
                        </p>
                        <p className="ml-2 text-sm">
                        Rating{""} {props.avgRating} Stars
                        </p>
                        

        </Link>
        
      </section>

      <section className="flex items-center flex-wrap justify-between
    
      leading-none p-2 md:p-4 ">
        <Link to="#" className="flex items-center no-underline hover:underline text-black">
        <p className="ml-2 text-sm">
        ₹{props.costForTwo / 100} FOR TWO
                        </p>
                        <p className="ml-2 text-sm">
                        Delivery In: {props.deliveryTime} Minutes
                        </p>
                        

        </Link>
        
      </section>
     </article>
     </div>

        
    )
  }

  export default RestaurantCard