import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../Components/Layouts/base'

import {
    StaticImage,
    // GatsbyImage
} from "gatsby-plugin-image"
import SearchEngine from '../Components/SearchEngine'
import Nav from '../Components/Nav/Base'
import ProductsSummary from '../Components/ProductsSummary/index.js'

import {
    Heading,
    Box
} from '@chakra-ui/react'

const HomeTemplate = ( props ) => {
    const pageContent = props.data.page
    const univers = props.data.univers.edges
    const products = props.data.products.edges
    return(
        <Layout
            enableBackButton = { false }
        >
            <Heading as='h1'>Home: { pageContent.title }</Heading>
            {/* <pre>
                { JSON.stringify( props.data, null, 1 )}
            </pre> */}

            <Nav data={ univers } />

            <ProductsSummary data={ products } />

            {/* <SearchEngine /> */}

            {/* <pre>
                { JSON.stringify( props, null, 1 )}
            </pre> */}
        </Layout>
    )
}

export default HomeTemplate

export const pageQuery = graphql`
query homeQuery( $contentfulID: String! ){
    page:contentfulPage(contentful_id: {eq: $contentfulID})
    {
        slug
        title 
    }
    univers:allContentfulUnivers
    {
        edges {
            node {
                slug
                title
            }
        }
    }
    products:allContentfulProduct
    {
        edges {
            node {
                slug
                title
            }
        }
    }
}
`