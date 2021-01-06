import React from 'react'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <div>
      <h1>Hello.</h1>
      <h2>I'm Chase, a full-stack developer living in Los Angeles.</h2>
      <p>Need a developer? <Link to='/contact'>Contact Me!</Link></p>
    </div>
  )
}

export default IndexPage
