import React from 'react'
import { Link } from 'gatsby'

import Footer from '../components/Footer'
import Header from '../components/Header'

const IndexPage = () => {
  return (
    <div>
      <Header />
      <h1>Hello.</h1>
      <h2>I'm Chase, a full-stack developer living in Los Angeles.</h2>
      <p>Need a developer? <Link to='/contact'>Contact Me!</Link></p>
      <Footer />
    </div>
  )
}

export default IndexPage
