import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const carts = useSelector(storeState=>storeState.CartRecuder)
  return (
    <nav className="navbar sticky-top bg-body-tertiary">
        <div className="container-fluid">
          <ul className="nav justify-content-center w-100">
            <li className="nav-item"><Link className="nav-link" to={`/`}>Shop</Link></li>
            <li className="nav-item">
              <Link className="nav-link" to={`/cart`}>
                Cart {carts.length > 0 &&  (
                  <span className="badge text-bg-primary">{carts.length}</span>
                )}
              </Link>
            </li>
          </ul>
        </div>
    </nav>
  )
}

export default NavBar