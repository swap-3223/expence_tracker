import React from 'react'
import { Navigate } from 'react-router-dom'

function PvtComponent({children}) {
    const res = JSON.parse(localStorage.getItem('user'))
    if(!res || !res.isLoggedin){
          return <Navigate to='/login'/>
        }
    
    return children;
}

export default PvtComponent