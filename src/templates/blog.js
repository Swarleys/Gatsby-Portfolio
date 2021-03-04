import React from 'react'
import { graphql } from 'gatsby';
import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

import Layout from '../components/layout'
import Head from '../components/head';

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      topmedia {
        gatsbyImageData(quality: 60, width: 900, placeholder: BLURRED)
        title
      }
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
          }
          file {
            contentType
            url
          }
          description
          title
          gatsbyImageData(quality: 60, placeholder: BLURRED, width: 900)
        }
      }
    }
  }
`

const PostImage = styled(GatsbyImage)`
  border-radius: 5px;
  box-shadow: 0px 10px 10px -2px rgba(10,10,10,0.15);
  width: 90%;
  margin: 15px auto;
  display: block !important;
`

const Blog = props => {
  const { topmedia, title, publishedDate, body } = props.data.contentfulBlogPost;
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => <PostImage image={node.data.target.gatsbyImageData} title={node.data.target.title} alt={node.data.target.title} />,
    }
  }
  return (
    <Layout>
      <Head title={title} />
      <GatsbyImage image={topmedia.gatsbyImageData} title={topmedia.title} alt={topmedia.title} />
      <h1>{title}</h1>
      <p>{publishedDate}</p>
      {/* Render the Rich Text field data: */}
      {body && renderRichText(body, options)}
    </Layout>
  )
}

export default Blog;