import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby';
import styled from "styled-components"

import Layout from "../components/layout"


const  BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const StyledOl = styled.ol`
    list-style-type: none;
    margin: 0;
  `
  const StyledLi = styled.li`
    margin: 1rem 0;

    a {
      background: #f4f4f4;
      color: #000;
      display: block;
      padding: 1rem;
      text-decoration: none;
    }

    a:hover {
      background: #e4e4e4;
    }

    h2 {
      margin-bottom: 0;
    }
    p {
      color: #777;
      font-size: .8rem;
      font-style: italic;
    }
  `


  return (
    <Layout>
      <h1>Blog</h1>
      <StyledOl>
        {data.allMarkdownRemark.edges.map(edge => {
          const {frontmatter, fields } = edge.node;
          return (
            <StyledLi>
              <Link to={`/blog/${fields.slug}`}>
                <h2>{frontmatter.title}</h2>
                <p>{frontmatter.date}</p>
              </Link>
            </StyledLi>
          )
        })}
      </StyledOl>
    </Layout>
  )
}

export default BlogPage
