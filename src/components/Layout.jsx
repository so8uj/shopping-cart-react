import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'



const Layout = () => {
  return (
    <>
        <NavBar />
        <Outlet />

        <br /><br /><br /><br />

    </>
  )
}

export default Layout