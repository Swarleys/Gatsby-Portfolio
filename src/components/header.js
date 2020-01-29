import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import styled from 'styled-components'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          navLinks {
            name
            slug
          }
        }
      }
    }
  `)

  const activeClassName = "active";

  const HeaderLink = styled(Link).attrs({ activeClassName: activeClassName })`
    color: #666;
    font-size: 0.9rem;
    margin-right: 1.3rem;
    text-decoration: none;

    &:hover {
      color: #444;
    }
    &.active {
      color: #222;
    }
  `
  const Header = styled.header`
    padding: 1rem 0 3rem;
  `
  const NavList = styled.ul`
    display: flex;
    list-style-type: none;
    margin: 0
  `
  const Title = styled(Link)`
    color: #000;
    font-size: 3rem;
    text-decoration: none;
  `
  const { title, navLinks } = data.site.siteMetadata;

  return (
    <Header>
      <h1>
          <Title to="/">{title}</Title>
      </h1>
      <nav>
        <NavList>
          {navLinks.map(navLink => {
            return (
              <li key={navLink.slug}>
                <HeaderLink to={navLink.slug}>
                  {navLink.name}
                </HeaderLink>
              </li>
            )
          })}
        </NavList>
      </nav>
    </Header>
  )
}

export default Header