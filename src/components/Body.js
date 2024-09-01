import React, { Children } from 'react'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Login from './Login';
import Browse from './Browse';

const Body = () => {
  return (
    <RouterProvider router={appRouter}/>
  )
}

const appRouter= createBrowserRouter([

    {
        path:'/',
        element:<Login/>,

    },
    {
        path:'Browse',
        element:<Browse/>
    }   

]
   
)



export default Body