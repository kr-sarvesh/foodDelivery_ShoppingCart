const loggedIn =()=>{
  return true
}


// Header component starts from here

const Header = ()=>{

    return(
      <div className='header'>
        <div className='logo-container'>
          <img className="logo"
          src={require('../images/foodlog.png')}
          alt='no-img'
          />
        </div>
        <div className='nav-items'>
          <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          </ul>
        </div>
        <div className='nav-items'>
          <ul>
        <li>Login</li>
        <li>Logout</li>
        </ul>
        </div>
      </div>
    )
  }
  export default Header