import React from 'react'

import Footer from '../components/footer'
import Header from '../components/header'
import styled from 'styled-components'

const Container = styled.div`
    margin: 0 auto;
    max-width: 900px;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    min-height: 100vh;
  `;

const Content = styled.div`
    flex-grow: 1;
  `

const Layout = (props) => {

  return (
    <Container>
      <Content>
        <Header />
        {props.children}
      </Content>
      <Footer />
    </Container>
  )
}

export default Layout

