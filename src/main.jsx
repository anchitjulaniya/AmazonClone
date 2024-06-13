import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SignIn } from './components/SignIn.jsx'
import { SignUp } from './components/SignUp.jsx'
import Home from './components/Home.jsx'
import {createBrowserRouter ,RouterProvider} from 'react-router-dom'
import Cart from './components/Cart.jsx'
import Product from './components/Product.jsx'
import ProductDisplay from './components/ProductDisplay.jsx'
import AIChatBot from './components/AIChatBot.jsx'

const renderFunction = createBrowserRouter([
  {
    path : '/',
    element : <App />,
    children : [
      {
        path : '/',
        element : <Home />
      },
      {
        path : '/signin',
        element : <SignIn />
      },
      {
        path: '/signup',
        element :<SignUp />
      },
      {
        path: '/cart',
        element :<Cart />
      },
      {
        path: '/product',
        element :<Product />
      },
      {
        path: '/productdisplay',
        element :<ProductDisplay />
      },
      

    ]
  },
  {
    path: '/ai',
    element : <AIChatBot />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={renderFunction} ></RouterProvider>
)
