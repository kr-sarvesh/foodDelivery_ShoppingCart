import { useState } from 'react'

// Header component starts from here

const Header = ()=>{

  const [loginToggle, setLoginToggle] = useState("login")

  function loginToggleHandler (){
    if(loginToggle === "login"){
      setLoginToggle("logout")
    }
    else (setLoginToggle("login"))
  }

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
        <li><button onClick={loginToggleHandler}>{loginToggle}</button></li>
        </ul>
        </div>
      </div>
    )
  }
  export default Header