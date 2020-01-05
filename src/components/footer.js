import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from "styled-components"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const StyledFooter = styled.footer`
    margin-top: 3rem;
  `

  return (
    <StyledFooter>
      <p>Created by {data.site.siteMetadata.author}, © 2020</p>
    </StyledFooter>
  )
}

export default Footer