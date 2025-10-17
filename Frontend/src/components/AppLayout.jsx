import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../pages/Footer'
import {Outlet} from 'react-router-dom'
import Sidebar from './Sidebar'
import AddExpense from './AddExpense'
function AppLayout() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <AddExpense/>
      <Footer/>
    </>
  )
}

export default AppLayout