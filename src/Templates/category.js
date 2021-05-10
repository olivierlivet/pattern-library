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


const CategoryTemplate = (props) => {
    const pageContent = props.data.category
    const variants = props.data.variants.edges
    const products = props.data.products.edges
    return (
        <Layout
            enableBackButton={ false }
        >
            <Helmet>
                <title>{pageContent.titleSeo}</title>
                <meta name='description' content={pageContent.descriptionSeo} />
            </Helmet>

            <PageHeader
                data = { pageContent }
                links = { variants }
                hierarchy = {{ 'univers': pageContent.univers }}

            />

        </Layout>
    )
}

export default CategoryTemplate

export const pageQuery = graphql`
query categoryQuery( $contentfulID: String! ){
    category:contentfulCategory(contentful_id: {eq: $contentfulID}) {
        slug
        title
        titleH1
        titleSeo
        descriptionSeo{ descriptionSeo }
        description { raw }
        illustration { gatsbyImageData(layout: FULL_WIDTH) }
        univers { title slug }
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