import React from 'react'
import { Link } from 'gatsby';
import Head from '../components/head';
import { Heading, Text } from '@chakra-ui/react';

const NotFound = () => {
  return (
    <>
      <Head title="404 page" />
      <Heading as="h1">Page not found</Heading>
      <Text mt="2">
        <Link to="/"> Head to home.</Link>
      </Text>
    </>
  )
}

export default NotFound;