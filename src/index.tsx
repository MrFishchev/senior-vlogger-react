import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import MainSlide from './features/MainSlide/MainSlide'
import AboutMe from './features/AboutMe/AboutMe'
import Blog from './features/Blog/Blog'
import BlogPost from './components/BlogPost/BlogPost'
import NotFound from './features/NotFound/NotFound'
import Manage from './features/Manage/Manage'
import CreatePost from './features/Manage/CreatePost/CreatePost'

import 'bootswatch/dist/flatly/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './styles/app.sass'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
document.body.classList.add('dark')
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<MainSlide />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/blog">
          <Route index element={<Blog />} />
          <Route path=":slug" element={<BlogPost />} />
        </Route>
        <Route path="/manage">
          <Route index element={<Manage />} />
          <Route path="posts/create" element={<CreatePost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
