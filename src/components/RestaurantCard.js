
// Resuable Card
const RestaurantCard = (props)=> {
    // Destructure of Props
    // console.log(props);
    // const {resData} = props  
  
  
    return(
      <div className='res-card'>
        <img 
        className='res-logo'
        src=
        {'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/'+ props.cloudinaryImageId }
        
        alt='no-Img'/>
        <h3>{props.name}</h3>
        <h4>{props.cuisines.join(", ")}</h4>
        <h4>{props.avgRating} stars</h4>
        <h4>₹{props.costForTwo / 100} FOR TWO</h4>
        <h4>{props.deliveryTime} minutes</h4>
      </div>
    )
  }

  export default RestaurantCard