import React from 'react'
import './Footer.sass'
import { NavLink } from 'react-router-dom'

import { ReactComponent as LinkedinIcon } from './icons/linkedin.svg'
import { ReactComponent as InstagramIcon } from './icons/instagram.svg'
import { ReactComponent as GithubIcon } from './icons/github.svg'

const Footer: React.FC<{ isBlogLayout: boolean }> = ({ isBlogLayout }) => {
  return (
    <footer className="wrapper">
      {isBlogLayout && (
        <NavLink to="/blog">
          <button type="button" className="btn">
            Read Blog
          </button>
        </NavLink>
      )}
      {!isBlogLayout && <button className="btn">Subscribe</button>}

      <div className="icon-wrapper">
        <a
          href="https://www.linkedin.com/in/mrfishchev"
          target={'_blank'}
          className="icon"
          rel="noreferrer"
        >
          <div>
            <LinkedinIcon />
          </div>
        </a>

        <a
          href="https://www.instagram.com/mrfishchev"
          target={'_blank'}
          className="icon"
          rel="noreferrer"
        >
          <div>
            <InstagramIcon />
          </div>
        </a>

        <a
          href="https://www.github.com/mrfishchev"
          target={'_blank'}
          className="icon"
          rel="noreferrer"
        >
          <div>
            <GithubIcon />
          </div>
        </a>
      </div>

      <div className="copyright">
        Aleksei Fishchev <span>&copy; 2020-{new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}

export default Footer
