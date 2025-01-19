import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './conponents/Home/home.jsx'
import About from './conponents/About/About.jsx'
import Contact from './conponents/Contact/Contact.jsx'

import Signup from './conponents/Signup/Signup.jsx'
import Login from './conponents/Login/Login.jsx'
import UserCard from './conponents/Card/Card.jsx'
import UserCards from './conponents/Card/Alldata.jsx'
import App from './App.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='card' element={<UserCard/>}/>
      <Route path='alldata' element={<UserCards/>}/>
    </Route>

    
    <Route>
      <Route path='app' element={<App/>}/>
    </Route>
    </>
    
    
    

)


)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
