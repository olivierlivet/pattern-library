import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../Components/Layouts/base'
import SearchEngine from '../Components/SearchEngine'
import Nav from '../Components/Nav/Base'

import {
    Heading,
    Box,
    SimpleGrid,
    Stack,
    Flex
} from '@chakra-ui/react'
import Wrapper from '../Components/Layouts/Wrapper'
import RichContent from '../Components/RichContent'
import { GatsbyImage } from 'gatsby-plugin-image'
import Helmet from 'react-helmet'
import Hierarchical from '../Components/Nav/Hierarchical'

import PageHeader from '../Components/PageHeader'

const UniversTemplate = (props) => {
    const pageContent = props.data.univers
    const categories = props.data.categories.edges

    console.log('pageContent', pageContent)
    return (
        <Layout
            enableBackButton={ false }
        >
            <Hierarchical data={ pageContent } />
            <Helmet>
                <title>{pageContent.titleSeo}</title>
                <meta name='description' content={pageContent.descriptionSeo.descriptionSeo} />
            </Helmet>
            <div>Test</div>
            <pre>
                { JSON.stringify( categories, null, 1 )}
            </pre>
            <PageHeader
                data = { pageContent }
                links = { categories }
                // hierarchy = { ...univers }
            />
            {/* <RichContent data={ pageContent.description } /> */}

        </Layout>
    )
}

export default UniversTemplate

export const pageQuery = graphql`
query universQuery( $contentfulID: String! ){
    univers:contentfulUnivers(contentful_id: {eq: $contentfulID}) {
        slug
        title
        titleH1
        titleSeo
        descriptionSeo{ descriptionSeo }
        description {
            raw
            references{
                contentful_id      
                slug
            }
        }
        illustration { gatsbyImageData(layout: FULL_WIDTH) }
    }
    categories:allContentfulCategory(
        filter: {
            univers: { contentful_id: { eq: $contentfulID } }
        }
    ) {
        edges {
            node {
                slug
                title
            }
        }
    }
}
`