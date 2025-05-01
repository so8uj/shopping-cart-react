import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar sticky-top bg-body-tertiary">
        <div className="container-fluid">
          <ul className="nav justify-content-center w-100">
            <li className="nav-item"><Link className="nav-link" to={`/`}>Shop</Link></li>
            <li className="nav-item"><Link className="nav-link" to={`/cart`}>Cart</Link></li>
          </ul>
        </div>
    </nav>
  )
}

export default NavBar