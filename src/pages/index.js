import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import "../styles/index.css"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <h1>Hello</h1>
      <h2>I'm Esteban, a Front-End Developer living in Barcelona.</h2>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage