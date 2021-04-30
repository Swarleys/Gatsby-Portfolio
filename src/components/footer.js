import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Box, Text } from "@chakra-ui/react"

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

  return (
    <Box as="footer" marginTop="3rem">
      <Text>Created by {data.site.siteMetadata.author}, © 2020</Text>
    </Box>
  )
}

export default Footer
