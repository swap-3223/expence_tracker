import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../pages/Footer'
import {Outlet} from 'react-router-dom'
import Sidebar from './Sidebar'
function AppLayout() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default AppLayout