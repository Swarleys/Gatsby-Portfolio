import React from 'react'
import { Link } from 'gatsby';

import Layout from '../components/layout'
import Head from '../components/head';

const NotFound = () => {
  return (
    <Layout>
      <Head title="404 page"/>
      <h1>Page not found</h1>
      <p>
        Last thest of the day
        <Link to="/"> Head to home.</Link>
      </p>
    </Layout>
  )
}

export default NotFound;