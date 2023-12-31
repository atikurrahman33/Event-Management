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
import AuthProvider from './components/provider/AuthProvider';
import Details from './components/details/Details';
import PrivateRoute from './components/route/PrivateRoute';
import ErrorCard from './components/home/ErrorCard';
import Awards from './components/Awards/Awards';




const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout> ,
    errorElement :<ErrorCard></ErrorCard>,
    children:[
      {
          path:"/",
          element:<Home></Home>,
          loader:()=>fetch('/Card.json')
          
      },
      {
          path:"/About",
          element:<About></About>,
      },
      {
          path:"/Service",
          loader:()=>fetch('/Card.json'),
          element:<Services></Services>,
          
          
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
      },
      {
        path:"/abouts/:id",
        loader:()=>fetch('/Card.json'),
        element:<PrivateRoute><Details></Details></PrivateRoute>,


       
      },
      {
        path:"/award",
        element:<PrivateRoute><Awards></Awards></PrivateRoute>
      },
     
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
