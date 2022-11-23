import React from 'react'
import Header from '../Header/Header'

const Page: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header isBlogLayout={false} />
      {children}
    </>
  )
}

export default Page
