import React from 'react'
import './MainSlide.sass'

const MainSlide: React.FC = () => {
  return (
    <main data-theme="">
      <div className="mask"></div>
      <div className="title no-select">
        <h3>Hello! I am</h3>
        <h1>Mr. Fishchev</h1>
        <h3 className="job">Senior Software Engineer</h3>
        <div className="routes">
          <button type="button" className="btn btn-lg">
            Blog
          </button>
          <button type="button" className="btn btn-lg">
            About
          </button>
        </div>
      </div>
    </main>
  )
}

export default MainSlide
