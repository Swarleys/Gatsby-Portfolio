import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"


const AboutPage = () => {
  return (
    <Layout>
      <h1>About me</h1>
      <p>
        I'm a Front-End Developer currently working at Marfeel and living in
        Barcelona.
      </p>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
