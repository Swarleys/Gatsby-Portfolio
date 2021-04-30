import React from "react"
import { Link } from "gatsby"
import Head from "../components/head"
import { Heading, Text } from "@chakra-ui/react"


const AboutPage = () => {
  return (
    <>
      <Head title="About" />
      <Heading as="h1">About me</Heading>
      <Text>
        I'm a Front-End Developer currently working at Marfeel and living in
        Barcelona.
      </Text>
      <Text>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </Text>
    </>
  )
}

export default AboutPage
