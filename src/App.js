import { lazy, Suspense, useState } from 'react'
import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import RestaurantMenu from './components/RestaurantMenu'
import Contact from './components/Contact'
import Error from './components/Error'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import Shimmer from './components/Shimmer'
// lazy creating/ importing component only when it is required
// dynamic import
const Instamart = lazy(() => import('./components/Instamart'))

// This is a normal fn which returns some piece of JSX
function App() {
  return (
    <div className='overflow-x-hidden flex flex-col justify-between min-h-screen '>
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
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
])

export default App
