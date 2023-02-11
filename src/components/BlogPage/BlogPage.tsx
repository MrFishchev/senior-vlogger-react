import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const BlogPage: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    document.body.classList.remove('dark')
    document.body.classList.add('light')

    return () => {
      document.body.classList.remove('light')
    }
  }, [])

  return (
    <>
      <Header isBlogLayout={true} />
      {children}
      <Footer isBlogLayout={true} />
    </>
  )
}

export default BlogPage
