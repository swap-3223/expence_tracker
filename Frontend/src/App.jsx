import React from 'react'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import Footer from './pages/Footer'
import Dashbord from './components/Dashbord'
import { MdDashboard } from 'react-icons/md'


function App() {
  return (
    <div className='text-red-600'>
      <Navbar/>

      {/* <Login/> */}
      {/* <Signup/> */}
      <Dashbord/>
      <Footer/>

    </div>
  )
}

export default App