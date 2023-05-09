import { useState } from 'react'
import { Link } from 'react-router-dom'
import useOnline from '../utils/useOnline'

// Header component starts from here

const Header = () => {
  const [loginToggle, setLoginToggle] = useState('LOGIN')

  // using custom online Hook
  const isOnline = useOnline()

  function loginToggleHandler() {
    if (loginToggle === 'LOGIN') {
      setLoginToggle('LOGOUT')
    } else setLoginToggle('LOGIN')
  }

  return (
    <nav className='container mx-auto relative p-2'>
      {/* Flex container for Nav Items */}
      <div
        className='flex items-center justify-between
        space-x-20 my-6'
      >
        {/* Logo */}
        <div className='z-30'>
          <Link to='/'>
            <img
              className='h-[5rem] w-[5rem] cursor-pointer '
              src={require('../images/foodlog.png')}
              alt='no-img'
            />
          </Link>
        </div>

        {/* Menu Items */}

        <div className='hidden items-center space-x-10 uppercase text-grayishBlue md:flex'>
          <Link
            className='tracking-widest
          hover:text-yellow-700
          font-semibold
          '
            to='/'
          >
            Home
          </Link>
          <Link
            className='tracking-widest hover:text-yellow-700
          font-semibold
          '
            to='/about'
          >
            About Us
          </Link>
          <Link
            className='tracking-widest  hover:text-yellow-700 font-semibold'
            to='/contact'
          >
            Contact Us
          </Link>
          <Link
            className='tracking-widest  hover:text-yellow-700 font-semibold'
            to='/instamart'
          >
            Instamart
          </Link>
        </div>
        <div className='flex'>
          <ul>
            <li>
              <button className='' onClick={loginToggleHandler}>
                {loginToggle}
              </button>
              <span>{isOnline ? '🟢' : '🔴'}</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Header
