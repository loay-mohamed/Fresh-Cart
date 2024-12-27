import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Layout() {
  return (
    <>
    <div >

    <Navbar/>
    </div>
    <div className="container  mt-20">
    <Outlet></Outlet>
    </div>
    <div className='mt-44'>
    <Footer/>
    </div>
    </>
  )
}
