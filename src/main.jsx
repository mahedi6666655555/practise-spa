import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/pages/Home';
import About from './components/nav/About';
import Contact from './components/nav/Contact';


let router = createBrowserRouter([

  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "About",
        element: <About></About>


      },

      {
        path: "Contact",
        element: <Contact></Contact>


      }


    ]
  }


])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


<RouterProvider router={router}  ></RouterProvider>

  </React.StrictMode>,
)
