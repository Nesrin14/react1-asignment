
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './Component/About/About';
import Portfolio from './Component/Portfolio/Portfolio';
import Contact from './Component/Contact/Contact';
import MasterLayer from './Component/MasterPage/MasterLayer';
import Notfound from './Component/Notfound/Notfound';
import Home from './Component/Home/Home';


const router =createBrowserRouter( [
  {path:"",element:<MasterLayer/>, errorElement:<Notfound/>,children:[
  {path:"",element:<Home/>},
  {path:'about',element:<About/>},
  {path:'portfolio',element:<Portfolio/>},
  {path:'contact',element:<Contact/>},
  // {path:"*",element:<Notfound/>}

  ]}
])
export default function App() {
  return (
    <RouterProvider router={router}/>
  )
}



