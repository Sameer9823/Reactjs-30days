import React from 'react'
import Header from './conponents/Header/header'
import Footer from './conponents/Header/footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
   <>
    <Header/>
    <Outlet/>
    <Footer/>
   </>
  )
}

export default Layout