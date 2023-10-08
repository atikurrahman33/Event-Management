import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home';
import MainLayout from './components/mainLayout/MainLayout';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Services from './components/Services/Services';


const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout> ,
    children:[
      {
          path:"/",
          element:<Home></Home>,
          loader:()=>fetch('Card.json')
          
      },
      {
          path:"/About",
          element:<About></About>,
      },
      {
          path:"/Service",
          element:<Services></Services>
      },
      {
          path:"/Contact",
          element:<Contact></Contact>
          
      }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
