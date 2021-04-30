import React from 'react'
import { graphql } from 'gatsby';
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "@emotion/styled"
import Head from '../components/head';
import { Heading, Text, Box, Divider, OrderedList, UnorderedList, ListItem, Code } from '@chakra-ui/react';

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
box-shadow: 0px 10px 10px -2px rgba(10,10,10,0.15);
width: 90%;
margin: 15px auto;
display: block;
picture img {
  border-radius: 5px;  
}
`

const Blog = props => {
  const { topmedia, title, publishedDate, body } = props.data.contentfulBlogPost;
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => (
        <PostImage
          image={node.data.target.gatsbyImageData}
          title={node.data.target.title}
          alt={node.data.target.title}
        />
      ),
      [BLOCKS.HEADING_1]: (_node, children) => (
        <Heading fontSize="5xl" as="h1" marginBottom="10">
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_2]: (_node, children) => (
        <Heading fontSize="4xl" as="h2">
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_3]: (_node, children) => (
        <Heading fontSize="3xl" as="h3">
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_4]: (_node, children) => (
        <Heading fontSize="2xl" as="h4">
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_5]: (_node, children) => (
        <Heading fontSize="xl" as="h5">
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_6]: (_node, children) => (
        <Heading fontSize="lg" as="h6">
          {children}
        </Heading>
      ),
      [BLOCKS.HR]: () => <Divider />,
      [BLOCKS.QUOTE]: (_node, children) => (
        <Text paddingLeft={6}>
          <i>{children}</i>
        </Text>
      ),
      [BLOCKS.OL_LIST]: (_node, children) => (
        <OrderedList>{children}</OrderedList>
      ),
      [BLOCKS.UL_LIST]: (_node, children) => (
        <UnorderedList>{children}</UnorderedList>
      ),
      [BLOCKS.LIST_ITEM]: (_node, children) => <ListItem>{children}</ListItem>,
    },
    renderMark: {
      [MARKS.CODE]: (text) => <Code>{text}</Code>,
      [MARKS.BOLD]: (text) => <Text as="b">{text}</Text>,
      [MARKS.ITALIC]: (text) => <Text as="i">{text}</Text>,
      [MARKS.UNDERLINE]: (text) => <Text as="u">{text}</Text>,
    },
  }
  return (
    <>
      <Head title={title} />
      <GatsbyImage image={topmedia.gatsbyImageData} title={topmedia.title} alt={topmedia.title} />
      <Heading fontSize="5xl" as="h1">{title}</Heading>
      <Box as="time">{publishedDate}</Box>
      {/* Render the Rich Text field data: */}
      {body && renderRichText(body, options)}
    </>
  )
}

export default Blog;