import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import SignUp from './pages/SignUp/SignUp'
import Login from './pages/Login/Login'
import { Toaster } from 'react-hot-toast'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import GuestRoute from './components/GuestRoute/GuestRoute'
import UserProvider from './Context/User.context'
import CarProvider from './Context/Cart.context'
import Cart from './pages/Cart/Cart'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import Checkout from './pages/Checkout/Checkout'
import Order from './pages/Order/Order'
import Brand from './pages/Brand/Brand'
import Product from './pages/Product/Product'
import Wishlist from './pages/Wishlist/Wishlist'
import ForgetPassword from './components/ForgetPassword/ForgetPassword'
import VerifyCode from './components/VerifyCode/VerifyCode'
import ResetPassword from './components/ResetPassword/ResetPassword'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        { index: true, element: <Home /> } ,
        {path:"/cart",element:<Cart/>},
        {path:"wishlist",element:<Wishlist/>},
        {path:"/product/:id",element:<ProductDetails/>},
        {path:"checkout",element:<Checkout/>},
        {path:"allorders",element:<Order/>},
        {path:"brands",element:<Brand/>},
        {path:"products",element:<Product/>}
      ],

    },
    {
      path: "/",
      element: (
        <GuestRoute>
          <Layout />
        </GuestRoute>
      ),
      children: [
        { path: "/signup", element: <SignUp /> },
        { path: "/login", element: <Login /> },
        { path: "/ForgetPass", element: <ForgetPassword/> },
        { path: "/VeifyCode", element: <VerifyCode/> },
        { path: "/ResetPassword", element: <ResetPassword/> },
      ],
    },

  ]);

  return (
    <>

      <UserProvider>
        <CarProvider>
          <RouterProvider router={router} />
        </CarProvider>
      </UserProvider>
      <Toaster />
    </>
  )
}

export default App
