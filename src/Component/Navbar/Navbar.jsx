import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import style from "./Navbar.module.css"

export default function Navbar() {
  const location = useLocation()
  const [navbarOpen, setNavbarOpen] = React.useState(false)

  return (
    <>
      <nav className="navbar navbar-expand-lg p-0 bg-dark">
        <div className={`${style.containerfluid} container-fluid p-4`}>
          <Link className={`navbar-brand fs-1 ps-3 fw-bolder text-light`} to="/about">START FRAMEWORK</Link>
          <button className="navbar-toggler" type="button" onClick={() => setNavbarOpen(!navbarOpen)}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${navbarOpen ? 'show' : ''}`} id="navbarSupportedContent">
            <ul className={`${style.navbarNav} navbar-nav ms-auto mb-2 mb-lg-0`}>
              <li className="nav-item">
                <Link className={location.pathname === '/about' ? `${style.navlink} ${style.active} fw-bold ` : style.navlink} exact to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className={location.pathname === '/portfolio' ? `${style.navlink} ${style.active} fw-bold` : style.navlink} exact to="/portfolio">Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link className={location.pathname === '/contact' ? `${style.navlink} ${style.active} fw-bold` : style.navlink} exact to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}