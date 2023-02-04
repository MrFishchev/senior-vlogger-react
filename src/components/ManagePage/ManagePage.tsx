import React from 'react'
import { NavLink } from 'react-router-dom'

const ManagePage: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="manage-layout">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <NavLink
          to="/manage"
          className={({ isActive }) =>
            `${isActive ? 'active' : ''} navbar-brand`
          }
        >
          Manage
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink
                to="posts"
                className={({ isActive }) =>
                  `${isActive ? 'active' : ''} nav-link`
                }
              >
                Posts
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="subscribers"
                className={({ isActive }) =>
                  `${isActive ? 'active' : ''} nav-link`
                }
              >
                Subscribers
              </NavLink>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto mr-5">
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/blog" className="nav-link">
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/logout" className="nav-link">
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      {children}
    </div>
  )
}

export default ManagePage
