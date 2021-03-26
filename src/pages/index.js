import * as React from "react"
import Layout from '../Components/Layouts/base'
import {
  Box,
  Heading
} from '@chakra-ui/react'

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Box as='main'>
        <Heading>
          Patterns Library
        </Heading>
      </Box>
    </Layout>
  )
}

export default IndexPage
