import React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'

const Header = () => {

  const activeClassName = "active";

  const HeaderLink = styled(Link).attrs({ activeClassName: activeClassName })`
    color: #999;
    font-size: 0.9rem;
    margin-right: 1.3rem;
    text-decoration: none;

    &:hover {
      color: #666;
    }
    &.active {
      color: #333;
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
  return (
    <Header>
      <h1>
          <Title to="/">Esteban Ramos</Title>
      </h1>
      <nav>
        <NavList>
          <li>
            <HeaderLink to="/">Home</HeaderLink>
          </li>
          <li>
            <HeaderLink to="/blog">Blog</HeaderLink>
          </li>
          <li>
            <HeaderLink to="/about">About</HeaderLink>
          </li>
          <li>
            <HeaderLink to="/contact">Contact</HeaderLink>
          </li>
        </NavList>
      </nav>
    </Header>
  )
}

export default Header