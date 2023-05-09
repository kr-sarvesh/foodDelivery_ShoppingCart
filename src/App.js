import { lazy } from 'react'
import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import RestaurantMenu from './components/RestaurantMenu'
import Contact from './components/Contact'
import Error from './components/Error'

import { createBrowserRouter, Outlet } from 'react-router-dom'

// lazy creating
const Instamart = lazy(() => import('./components/Instamart'))

// This is a normal fn which returns some piece of JSx
function App() {
  return (
    <div className='overflow-x-hidden px-10'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/restaurant/:id',
        element: <RestaurantMenu />,
      },
      {
        path: '/instamart',
        element: <Instamart />,
      },
    ],
  },
])

export default App
