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

const EditorTemplate = ( props ) => {
    const pageContent = props.data.editor
    const products = props.data.products.edges
    return(
        <Layout
            enableBackButton = { true }
        >
            <Heading as='h1'>Editor: { pageContent.title }</Heading>
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

export default EditorTemplate

export const pageQuery = graphql`
query editorQuery( $contentfulID: String! ){
    editor:contentfulEditor(contentful_id: {eq: $contentfulID}) {
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