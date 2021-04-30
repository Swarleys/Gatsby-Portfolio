import React from "react"
import Footer from "../components/footer"
import { Box, Flex } from "@chakra-ui/react"
import NavBar from "./navBar"

const Layout = (props) => {
  return (
    <Flex
      margin="0 auto"
      flexDirection="column"
      maxWidth="900px"
      padding="1rem"
    >
      <Box as="header" p="0 0 2rem">
        <NavBar />
      </Box>
      <Box as="main">{props.children}</Box>
      <Footer />
    </Flex>
  )
}

export default Layout
