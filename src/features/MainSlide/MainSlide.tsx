import React from 'react'
import './MainSlide.sass'

import Html5 from './icons/html-5.svg'
import Angular from './icons/angularjs.svg'
import CSharp from './icons/c-sharp-logo.svg'
import Css3 from './icons/css3.svg'
import Dotnet from './icons/dotnet-color.svg'
import Github from './icons/github.svg'
import Java from './icons/JavaScript-color.svg'
import Microsoft from './icons/microsoft-logo.svg'
import Rabbit from './icons/RabbitMQ-color.svg'
import Sass from './icons/sass-color.svg'
import Vue from './icons/vuejs-color.svg'
import Bitbucket from './icons/bitbucket.svg'
import Firebase from './icons/firebase.svg'
import Git from './icons/git.svg'
import VisualStudio from './icons/visual-studio.svg'

import useBackground from './background'

const MainSlide: React.FC = () => {
  useBackground('icons-container', 'icons')
  return (
    <main className="icons-container" data-theme="">
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
      <div className="icons">
        <img className="svg-icon" src={Html5} alt="Html5" />
        <img className="svg-icon" src={Css3} alt="Css3" />
        <img className="svg-icon" src={CSharp} alt="CSharp" />
        <img className="svg-icon" src={Angular} alt="Angular" />
        <img className="svg-icon" src={Dotnet} alt="Dotnet" />
        <img className="svg-icon" src={Github} alt="Github" />
        <img className="svg-icon" src={Java} alt="Java" />
        <img className="svg-icon" src={Microsoft} alt="Microsoft" />
        <img className="svg-icon" src={Rabbit} alt="Rabbit" />
        <img className="svg-icon" src={Sass} alt="Sass" />
        <img className="svg-icon" src={Vue} alt="Vue" />
        <img className="svg-icon" src={Bitbucket} alt="Bitbucket" />
        <img className="svg-icon" src={Firebase} alt="Firebase" />
        <img className="svg-icon" src={Git} alt="Git" />
        <img className="svg-icon" src={VisualStudio} alt="VisualStudio" />
      </div>
    </main>
  )
}

export default MainSlide
