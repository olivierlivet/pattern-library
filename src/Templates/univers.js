import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../Components/Layouts/base'
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

const UniversTemplate = ( props ) => {
    const pageContent = props.data.univers
    const categories = props.data.categories.edges
    return(
        <Layout
            enableBackButton = { true }
        >
            <Heading as='h1'>Univers: { pageContent.title }</Heading>
            {/* <pre>
                { JSON.stringify( categories, null, 1 )}
            </pre> */}

            <Nav data={ categories } />

            {/* <SearchEngine /> */}

            {/* <pre>
                { JSON.stringify( props, null, 1 )}
            </pre> */}
        </Layout>
    )
}

export default UniversTemplate

export const pageQuery = graphql`
query universQuery( $contentfulID: String! ){
    univers:contentfulUnivers(contentful_id: {eq: $contentfulID}) {
        slug
        title
        description {
            raw
        }
        #picture { file { url } }
    }
    categories:allContentfulCategory {
        edges {
            node {
                slug
                title
            }
        }
    }
}
`