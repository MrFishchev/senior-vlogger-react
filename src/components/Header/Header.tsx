import React from 'react'
import './Header.sass'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

const Header: React.FC<{ isBlogLayout: boolean }> = ({ isBlogLayout }) => {
  return (
    <header className="wrapper">
      <div className="container">
        <nav>
          <div className="container">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  to="/blog"
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  to="/about"
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        <div className="manage">
          {isBlogLayout && (
            <div className="d-inline-block">
              <FontAwesomeIcon icon={faMoon} />
            </div>
          )}
          <NavLink to="/manage">Manage</NavLink>
          <a>Logout</a>
        </div>
      </div>
    </header>
  )
}

export default Header
