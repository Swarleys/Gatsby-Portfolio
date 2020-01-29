import React from 'react'
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Img from 'gatsby-image';
import styled from "styled-components"

import Layout from '../components/layout'
import Head from '../components/head';

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      topmedia {
        fluid(maxWidth: 900, quality: 60){
          ...GatsbyContentfulFluid_withWebp
        }
        title
      }
      body {
        json
      }
    }
  }
`

const PostImage = styled(Img)`
  border-radius: 5px;
  box-shadow: 0px 10px 10px -2px rgba(10,10,10,0.15);
  width: 90%;
  margin: 15px auto;
`

const Blog = props => {
  const { topmedia, title, publishedDate, body } = props.data.contentfulBlogPost;
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title['en-US']
        const { url, details } = node.data.target.fields.file['en-US'];
        const {width, height} = details.image;
        const aspectRatio = width/height;
        const maxWidth = 900;
        const quality = 60;

        const fluid = {
          aspectRatio,
          src: `${url}?w=${maxWidth}&q=${quality}`,
          srcWebp: `${url}?w=${maxWidth}&q=${quality}&fm=webp`,
          srcSet: `
            ${url}?w=${maxWidth/4}&h=${Math.floor((maxWidth/4)/aspectRatio)}&q=${quality} ${maxWidth/4}w,
            ${url}?w=${maxWidth/2}&h=${Math.floor((maxWidth/2)/aspectRatio)}&q=${quality} ${maxWidth/2}w,
            ${url}?w=${maxWidth}&h=${Math.floor(maxWidth/aspectRatio)}&q=${quality} ${maxWidth}w,
            ${url}?w=${maxWidth*1.5}&h=${Math.floor((maxWidth*1.5)/aspectRatio)}&q=${quality} ${maxWidth*1.5}w,
            ${url}?w=${maxWidth*2}&h=${Math.floor((maxWidth*2)/aspectRatio)}&q=${quality} ${maxWidth*2}w,
            ${url}?w=${maxWidth*3}&h=${Math.floor((maxWidth*3)/aspectRatio)}&q=${quality} ${maxWidth*3}w,
          `,
          srcSetWebp: `
            ${url}?w=${maxWidth/4}&h=${Math.floor((maxWidth/4)/aspectRatio)}&q=${quality}&fm=webp ${maxWidth/4}w,
            ${url}?w=${maxWidth/2}&h=${Math.floor((maxWidth/2)/aspectRatio)}&q=${quality}&fm=webp ${maxWidth/2}w,
            ${url}?w=${maxWidth}&h=${Math.floor(maxWidth/aspectRatio)}&q=${quality}&fm=webp ${maxWidth}w,
            ${url}?w=${maxWidth*1.5}&h=${Math.floor((maxWidth*1.5)/aspectRatio)}&q=${quality}&fm=webp ${maxWidth*1.5}w,
            ${url}?w=${maxWidth*2}&h=${Math.floor((maxWidth*2)/aspectRatio)}&q=${quality}&fm=webp ${maxWidth*2}w,
            ${url}?w=${maxWidth*3}&h=${Math.floor((maxWidth*3)/aspectRatio)}&q=${quality}&fm=webp ${maxWidth*3}w,
          `,
          sizes: "(max-width: 900px) 100vw, 900px"
        }

        return <PostImage alt={alt} title={alt} fluid={fluid}/>
      }
    }
  }
  return (
    <Layout>
      <Head title={title} />
      <Img fluid={topmedia.fluid} title={topmedia.title} alt={topmedia.title}/>
      <h1>{title}</h1>
      <p>{publishedDate}</p>
      {documentToReactComponents(body.json, options)}
    </Layout>
  )
}

export default Blog;