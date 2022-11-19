import React from 'react'
import './NotFound.sass'
import { Link } from 'react-router-dom'

const NotFound: React.FC = () => {
  return (
    <div className="p404">
      <div className="bowl">
        <div className="spdline"></div>
        <div className="spider">
          <div className="leg left-1"></div>
          <div className="leg left-2"></div>
          <div className="leg left-3"></div>
          <div className="leg right-1"></div>
          <div className="leg right-2"></div>
          <div className="leg right-3"></div>
        </div>
      </div>
      <div className="ghost">
        <div className="eye eye-left"></div>
        <div className="eye eye-right"></div>
        <div className="chocolate"></div>
        <div className="mouth"></div>
      </div>
      <div className="signwood"></div>
      <Link to="/">
        <div className="signtext">
          <p>
            Page not found
            <br />
            Go home :)
          </p>
        </div>
      </Link>
      <div className="pin"></div>
      <div className="line"></div>
    </div>
  )
}

export default NotFound
