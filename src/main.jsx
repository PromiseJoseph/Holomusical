import React from 'react'
import ReactDOM from 'react-dom/client'
import "./assets/css/main.css"
import Layout from './Layout.jsx'
import {  RouterProvider, createBrowserRouter, } from 'react-router-dom'

// layoutsand components
import HomeLayout from './components/homelayout/HomeLayout.jsx'
import UploadProvider from './components/context/UploadProvider.jsx'
import UploadLayout from './components/uploadlayout/UploadLayout.jsx'
import AboutLayout from './components/aboutlayout/AboutLayout.jsx'
import ContactLayout from './components/contactlayout/ContactLayout.jsx'


// import './index.css'
const router = createBrowserRouter([
  {
  
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <HomeLayout/>,
      },
      {
        path: "/uploads",
        element: <UploadLayout/>,
      }, 
      {
        path: "/about",
        element: <AboutLayout/>,
      }, 
      {
        path: "/contact",
        element: <ContactLayout/>,
      }, 
      
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UploadProvider>
      <RouterProvider router={router} />
    </UploadProvider>
  </React.StrictMode>,
)
