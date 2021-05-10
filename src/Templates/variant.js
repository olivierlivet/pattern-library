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

const VariantTemplate = (props) => {
    const pageContent = props.data.variant
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
                data={pageContent}
                // links={variants}
                hierarchy={{ 'univers': pageContent.univers }}

            />
        </Layout>
    )
}

export default VariantTemplate

export const pageQuery = graphql`
query variantQuery( $contentfulID: String! ){
    variant:contentfulVariant(contentful_id: {eq: $contentfulID}) {
        slug
        title
        titleH1
        titleSeo
        descriptionSeo{ descriptionSeo }
        description { raw }
        illustration { gatsbyImageData(layout: FULL_WIDTH) }

        univers { title slug }
        category { title slug }
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