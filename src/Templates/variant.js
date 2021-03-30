import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../Components/Layouts/base'
import ProductsSummary from '../Components/ProductsSummary/index.js'

import {
    StaticImage,
    // GatsbyImage
} from "gatsby-plugin-image"
import SearchEngine from '../Components/SearchEngine'
import Nav from '../Components/Nav/Base'

import {
    Heading,
    Box
} from '@chakra-ui/react'

const VariantTemplate = ( props ) => {
    const pageContent = props.data.variant
    const products = props.data.products.edges
    return(
        <Layout
            enableBackButton = { true }
        >
            <Heading as='h1'>Variant: { pageContent.title }</Heading>
            {/* <pre>
                { JSON.stringify( categories, null, 1 )}
            </pre> */}

            {/* <Nav data={ products } /> */}
            <ProductsSummary data={ products } />

            {/* <SearchEngine /> */}

            {/* <pre>
                { JSON.stringify( props, null, 1 )}
            </pre> */}
        </Layout>
    )
}

export default VariantTemplate

export const pageQuery = graphql`
query variantQuery( $contentfulID: String! ){
    variant:contentfulVariant(contentful_id: {eq: $contentfulID}) {
        slug
        title
        #description {
        #    raw
        #}
        #picture { file { url } }
    }
    products:allContentfulProduct(
        filter:{
			variant:{ contentful_id: { eq : $contentfulID}}
  	    })
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