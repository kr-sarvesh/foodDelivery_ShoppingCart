import { useState } from 'react'
import {Link} from "react-router-dom"
import useOnline from "../utils/useOnline"

// Header component starts from here

const Header = ()=>{

  const [loginToggle, setLoginToggle] = useState("login")

  function loginToggleHandler (){
    if(loginToggle === "login"){
      setLoginToggle("logout")
    }
    else (setLoginToggle("login"))
  }
  // using custom online Hook
  const isOnline = useOnline()
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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/instamart">Instamart</Link></li>
          </ul>
        </div>
        <div className='nav-items'>
          <ul>
        <li>
          <button onClick={loginToggleHandler}>{loginToggle}</button></li>
          <span>        
          {isOnline? "🟢": "🔴"}
</span>
        </ul>
        </div>
      </div>
    )
  }
  export default Header