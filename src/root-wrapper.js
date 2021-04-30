import React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import Layout from "./components/layout"

export const wrapPageElement = ({ element }) => {
    return (
      <ChakraProvider>
        <Layout>
          {element}
        </Layout>
      </ChakraProvider>
    )
}