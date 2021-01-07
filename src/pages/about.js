import React from 'react'
import { Link } from 'gatsby'

import Footer from '../components/Footer'
import Header from '../components/Header'

export const AboutPage = () => {
    return (
        <div>
            <Header />
            <h1>About Me</h1>
            <p>I am a software engineer with a passion for photo/video creation and a huge past in music.</p>
            <p><Link to='/contact'>Want to work with me? Reach out.</Link></p>
            <Footer />
        </div>
    )
}

export default AboutPage
