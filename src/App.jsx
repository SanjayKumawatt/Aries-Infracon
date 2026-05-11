import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import ErrorPage from './Components/ErrorPage'
import Home from './Pages/Home'
import TheCompany from './Pages/TheCompany'
import Infrastructure from './Pages/Infrastructure'
import Platform from './Pages/Platform'
import ReachUs from './Pages/ReachUs'

const App = () => {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"/",
          element:<Home/>
        }, 
        {
          path:"/the-company",
          element:<TheCompany/>
        }, 
        {
          path:"/infrastructure",
          element:<Infrastructure/>
        }, 
        {
          path:"/platform",
          element:<Platform/>
        }, 
        {
          path:"/reach-us",
          element:<ReachUs/>
        }, 

      ]
    }
  ])
  
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App