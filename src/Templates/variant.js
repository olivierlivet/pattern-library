import React from 'react'
import { graphql, navigate } from 'gatsby'
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
import CtaSearch from '../Components/CtaSearch'

import PageHeader from '../Components/PageHeader'
import CtaOpenSearch from '../Components/CtaOpenSearch'

const VariantTemplate = (props) => {
    const pageContent = props.data.variant
    const products = props.data.products.edges

    console.log( 'pageContent', pageContent )
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
                hierarchy={{ 'univers': pageContent.univers }}
                Cta={
                    <CtaOpenSearch
                        label={`Voir tous les modèle de ${pageContent.title}`}
                        handleSubmit={() =>
                            // console.log('click')
                            navigate(`/fr/search?category=${pageContent.category.contentful_id}&variant=${pageContent.contentful_id}&label=${'Les mini-jupes'}`)
                        }

                    />
                }
            />
        </Layout>
    )
}

export default VariantTemplate

export const pageQuery = graphql`
query variantQuery( $contentfulID: String! ){
    variant:contentfulVariant(contentful_id: {eq: $contentfulID}) {
        contentful_id
        slug
        title
        titleH1
        titleSeo
        descriptionSeo{ descriptionSeo }
        description { raw }
        illustration { gatsbyImageData(layout: FULL_WIDTH) }

        univers { contentful_id title slug }
        category { contentful_id title slug }
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