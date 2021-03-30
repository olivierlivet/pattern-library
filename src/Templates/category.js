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

const CategoryTemplate = ( props ) => {
    const pageContent = props.data.category
    const variants = props.data.variants.edges
    const products = props.data.products.edges
    return(
        <Layout
            enableBackButton = { true }
        >
            <Heading as='h1'>Category: { pageContent.title }</Heading>
            {/* <pre>
                { JSON.stringify( categories, null, 1 )}
            </pre> */}

            <Nav data={ variants } />

            <ProductsSummary data={ products } />

            {/* <SearchEngine /> */}

            {/* <pre>
                { JSON.stringify( props, null, 1 )}
            </pre> */}
        </Layout>
    )
}

export default CategoryTemplate

export const pageQuery = graphql`
query categoryQuery( $contentfulID: String! ){
    category:contentfulCategory(contentful_id: {eq: $contentfulID}) {
        slug
        title
        #description {
        #    raw
        #}
        #picture { file { url } }
    }
    variants:allContentfulVariant(
        filter:{ category:{ contentful_id: { eq : $contentfulID}} }
    ){
        edges {
            node {
                slug
                title
            }
        }
    }
    products:allContentfulProduct(
        filter:{ category:{ contentful_id: { eq : $contentfulID}} }
        )
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