import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

export const AboutPage = () => {
    return (
        <Layout>
            <h1>About Me</h1>
            <p>I am a software engineer with a passion for photo/video creation and a huge past in music.</p>
            <p><Link to='/contact'>Want to work with me? Reach out.</Link></p>
        </Layout>
    )
}

export default AboutPage
