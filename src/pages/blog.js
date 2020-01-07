import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby';
import styled from "styled-components"

import Layout from "../components/layout"
import Head from "../components/head"


const  BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
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
      <Head title="Blog" />
      <h1>Blog</h1>
      <StyledOl>
        {data.allContentfulBlogPost.edges.map(edge => {
          const { title, publishedDate, slug } = edge.node
          return (
            <StyledLi key={slug}>
              <Link to={`/blog/${slug}`}>
                <h2>{title}</h2>
                <p>{publishedDate}</p>
              </Link>
            </StyledLi>
          )
        })}
      </StyledOl>
    </Layout>
  )
}

export default BlogPage
