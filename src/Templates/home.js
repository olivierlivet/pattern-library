import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Layout from '../Components/Layouts/base'

import {
    StaticImage,
    // GatsbyImage
} from "gatsby-plugin-image"
import SearchEngineLoader from '../Components/SearchEngine/Loader.tsx'
import Nav from '../Components/Nav/Base'
import ProductsSummary from '../Components/ProductsSummary/index.js'
import HeroSearch from '../Components/Hero/Hero'
import RichContent from '../Components/RichContent'
import {
    Heading,
    Box,
    Button
} from '@chakra-ui/react'
import Wrapper from '../Components/Layouts/Wrapper'
import Helmet from 'react-helmet'

const HomeTemplate = (props) => {
    const pageContent = props.data.page
    const univers = props.data.univers.edges
    const products = props.data.products.edges

    const [showEngine, setShowEngine] = useState(false)
    const [category, setCategory] = useState(false)
    const [variant, setVariant] = useState(false)
    return (
        <Layout
            enableBackButton={false}
        >
            <Helmet>
                <title>{pageContent.title}</title>
                <meta name='description' content='Qu’est-ce-qu’un patron de couture ?  Le patron de couture est le plan qui vous permet de réaliser un ouvrage : il s’agit du tracé sur papier de tous les éléments composant un vêtement.' />
            </Helmet>
            <HeroSearch
                handleLoadSearchEngine={() => setShowEngine(true)}
                setCategory={( value )=>setCategory(value)}
                setVariant={( value )=>setVariant(value)}
            />
            <Wrapper>
                <Nav data={univers} />
                <Box
                    fontSize={{ 
                        base:'lg',
                        lg:'larger'
                    }}
                >
                    <RichContent data={pageContent.description} />
                </Box>
                <Box>
                    <Button>Login</Button>
                </Box>
                {/* <ProductsSummary data={products} /> */}
            </Wrapper>
            { showEngine ?
                <SearchEngineLoader
                    filter={{
                        category: category ? category : null,
                        variant: variant ? variant : null
                    }}
                    onClose={() => setShowEngine(false)}
                />
            :
                null
            }
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
        description {
            raw
            references {
                contentful_id
                node_locale
                slug
                ... on ContentfulUnivers { contentful_id slug }
            }
        }
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