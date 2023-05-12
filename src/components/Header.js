import { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import useOnline from '../utils/useOnline'
import UserContext from '../utils/UserContext'

// Header component starts from here

const Header = () => {
  const [loginToggle, setLoginToggle] = useState('LOGIN')

  // using custom online Hook
  const isOnline = useOnline()

  // using context
  const { user } = useContext(UserContext)

  function loginToggleHandler() {
    if (loginToggle === 'LOGIN') {
      setLoginToggle('LOGOUT')
    } else setLoginToggle('LOGIN')
  }

  const navLinkStyle = ({ isActive }) => {
    return {
      paddingBottom: isActive ? '4px' : 'none',
      borderBottom: isActive ? '4px solid orange' : 'none',
    }
  }
  return (
    <>
      <nav className=' navbar bg-neutral-100 shadow-lg px-20'>
        {/* Flex container for Nav Items */}
        <div
          className='container mx-auto flex items-center justify-between
         my-4 '
        >
          {/* Logo */}
          <div className='z-30'>
            <NavLink to='/'>
              <img
                className='h-[5rem] w-[5rem] cursor-pointer '
                src={require('../images/foodlog.png')}
                alt='no-img'
              />
            </NavLink>
          </div>

          {/* Menu Items */}

          <div className='hidden items-center space-x-10 uppercase text-grayishBlue md:flex'>
            <NavLink
              className='tracking-widest
          hover:text-yellow-700
          font-semibold
          '
              style={navLinkStyle}
              to='/'
            >
              Home
            </NavLink>
            <NavLink
              className='tracking-widest hover:text-yellow-700
          font-semibold
          '
              style={navLinkStyle}
              to='/about'
            >
              About Us
            </NavLink>
            <NavLink
              className='tracking-widest  hover:text-yellow-700 font-semibold'
              to='/contact'
              style={navLinkStyle}
            >
              Contact Us
            </NavLink>
            <NavLink
              className='tracking-widest  hover:text-yellow-700 font-semibold'
              to='/instamart'
              style={navLinkStyle}
            >
              Instamart
            </NavLink>
          </div>
          <div className='flex'>
            <ul>
              <li>
                <button className='' onClick={loginToggleHandler}>
                  {loginToggle}
                </button>
                <span>{isOnline ? '🟢' : '🔴'}</span>
                <h1 className='font-serif px-2 bg-red-300'> {user.userName}</h1>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Header
