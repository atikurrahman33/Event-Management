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

import Login from './components/Login/Login';
import Registration from './components/registration/Registration';



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
          element:<Services></Services>,
          loader:()=>fetch('Card.json')
          
      },
      {
          path:"/Contact",
          element:<Contact></Contact>
          
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/registration",
        element:<Registration></Registration>
      }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
