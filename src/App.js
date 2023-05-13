import { lazy, Suspense, useState } from 'react'
import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import RestaurantMenu from './components/RestaurantMenu'
import Contact from './components/Contact'
import Error from './components/Error'
import Cart from './components/Cart'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import Shimmer from './components/Shimmer'
import { Provider } from 'react-redux'
import store from './utils/store'
// lazy creating/ importing component only when it is required
// dynamic import
const Instamart = lazy(() => import('./components/Instamart'))

// This is a normal fn which returns some piece of JSx
function App() {
  return (
    <Provider store={store}>
      <div className='overflow-x-hidden flex flex-col  min-h-screen '>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
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
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
])

export default App
