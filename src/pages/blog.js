import React from "react"
import { graphql, useStaticQuery, Link as GatsbyLink } from "gatsby"

import Head from "../components/head"
import { Heading, Text, List, ListItem, Link } from "@chakra-ui/react"

const BlogPage = () => {
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

  return (
    <>
      <Head title="Blog" />
      <Heading as="h1">Blog</Heading>
      <List listStyleType="none" mt="4" spacing="4">
        {data.allContentfulBlogPost.edges.map((edge) => {
          const { title, publishedDate, slug } = edge.node
          return (
            <ListItem key={slug}>
              <Link
                as={GatsbyLink}
                to={`/blog/${slug}`}
                padding="4"
                background="gray.50"
                display="block"
                _hover={{
                  textDecoration: "none",
                  background: "gray.100"
                }}
              >
                <Heading as="h2">{title}</Heading>
                <Text fontStyle="italic" fontSize="1rem" color="gray.600">
                  {publishedDate}
                </Text>
              </Link>
            </ListItem>
          )
        })}
      </List>
    </>
  )
}

export default BlogPage
