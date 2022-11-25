import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Page: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header isBlogLayout={false} />
      {children}
      <Footer isBlogLayout={false} />
    </>
  )
}

export default Page
