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
    Button,
    Text
} from '@chakra-ui/react'
import Wrapper from '../Components/Layouts/Wrapper'
import Helmet from 'react-helmet'
import FacebookLogin from 'react-facebook-login';
import EntrySummary from '../Components/EntrySummary'
import Title from '../Components/Title'

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

            <Box textAlign='center'>
                <Text
                    fontFamily='DM Sans'
                    textTransform='uppercase'
                    color='gray.600'
                    fontSize='sm'
                    letterSpacing='wide'
                >the</Text>
                <Text
                    fontSize={{ base:'xx-large', lg:'xxx-large' }}
                    fontFamily='Noe Display'
                >Patterns Corner</Text>

                <Text
                    fontFamily='DM Sans'
                    fontSize='16px'
                    fontWeight='normal'
                >
                    Le plus grand choix de
                    {' '}<Heading
                            as='h1'
                            display='inline'
                            fontWeight='normal'
                            fontSize='inherit'
                            borderBottom='solid 3px'
                            borderBottomColor='#EFCBBF'
                            display='inline-block'
                            lineHeight='11px'
                        >patrons de couture</Heading>
                </Text>
            </Box>

            <HeroSearch
                handleLoadSearchEngine={() => setShowEngine(true)}
                setCategory={(value) => setCategory(value)}
                setVariant={(value) => setVariant(value)}
            />

            <Box>
                <Title>Le journal The Patterns Corner</Title>
                <EntrySummary />
                <Button>Voir plus</Button>
            </Box>

            <Wrapper>
                <Nav data={univers} />
                <Box
                    fontSize={{
                        base: 'lg',
                        lg: 'larger'
                    }}
                >
                    <RichContent data={pageContent.description} />
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