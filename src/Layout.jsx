import React from 'react'
import { Outlet } from 'react-router-dom'
import {SideBar,Footer} from "./index"


function Layout() {

  return (
    <>
    <SideBar/>
    <Outlet/>
    <Footer/>
    </>
 
  )
}

export default Layout