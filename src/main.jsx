import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/main.css'
// import App from './App.jsx'
// import uploadProvider from './components/context/UploadProvider.jsx'
import Layout from './Layout.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

// layoutsand components
import HomeLayout from './components/homelayout/HomeLayout.jsx'
import UploadProvider from './components/context/UploadProvider.jsx'
import UploadLayout from './components/uploadlayout/UploadLayout.jsx'
import AboutLayout from './components/aboutlayout/AboutLayout.jsx'
import ContactLayout from './components/contactlayout/ContactLayout.jsx'


// import './index.css'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<HomeLayout/>}/>
      <Route path='/uploads' element={<UploadLayout/>} />
      <Route path='/about' element={<AboutLayout/>} />
      <Route path='/contact' element={<ContactLayout/>}/>
    
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UploadProvider>
      <RouterProvider router={router} />
    </UploadProvider>
  </React.StrictMode>,
)
