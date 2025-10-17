import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import AppLayout from './components/AppLayout'
import Dashbord from './components/Dashbord'
import ReportsPage from './components/ReportPage';
import History from './components/History';
import AddExpense from './components/AddExpense'
import Home from './pages/Home';
import Login from "./pages/Login"
import Signup from "./pages/Signup"

function App() {
   const router = createBrowserRouter([
    { path:'/',
      element:<AppLayout/>,
      children: [
        { 
          index: true, 
          element: <Home/> 
        }, // default page
        {
          path:'dashbord',
          element:<Dashbord/>,
          children:[
        {
          path:'history',
          element:<History/>
        },
        { 
          path: "reports", 
          element: <ReportsPage /> 
        },
        { 
          path: "addexpense", 
          element: <AddExpense /> 
        },
      ]

        },
        
      ],
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/signup',
      element:<Signup/>
    }
   ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App