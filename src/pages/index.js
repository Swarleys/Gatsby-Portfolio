import React from "react"
import { Link } from "gatsby"
import { Heading, Text } from "@chakra-ui/react"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <>
      <Head title="Home"/>
      <Heading as="h1">Hello</Heading>
      <Heading as="h2">I'm Esteban, a Front-End Developer living in Barcelona and working at Marfeel.</Heading>
      <Text>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </Text>
      <Text>This is a test</Text>
    </>
  )
}

export default IndexPage