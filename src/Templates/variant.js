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
    Flex,
    Grid,
    Link,
    List,
    ListItem
} from '@chakra-ui/react'
import Wrapper from '../Components/Layouts/Wrapper'
import RichContent from '../Components/RichContent'
import { GatsbyImage } from 'gatsby-plugin-image'
import Helmet from 'react-helmet'
import Hierarchical from '../Components/Nav/Hierarchical'
import CtaSearch from '../Components/CtaSearch'

import PageHeader from '../Components/PageHeader'
import CtaOpenSearch from '../Components/CtaOpenSearch'
import StaticProductsList from '../Components/ProductsSummary/StaticList'
import BrandsSummary from '../Components/BrandsSummary'

const VariantTemplate = (props) => {
    const pageContent = props.data.variant
    const products = props.data.products.edges

    console.log('pageContent', pageContent)

    const SideTitle = ({ children }) => {
        return(
            <Heading
                as='h3'
                fontFamily='DM Sans'
                color='gray.500'
                letterSpacing='wide'
                textTransform='uppercase'
                mb={2}
                fontSize={{
                    base:'sm',
                    lg:'md'
                }}
            >
                { children }
            </Heading>
        )
    }

    return (
        <Layout
            enableBackButton={false}
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
            <BrandsSummary />
            <Wrapper>
                <Grid
                    templateColumns={{
                        base: `100%`,
                        lg: `1fr 700px`
                    }}
                    gap={{
                        base: 4,
                        lg: 8
                    }}
                    px={{
                        base: 4,
                        lg: 10
                    }}
                >
                    <Box
                        order={{
                            base: 1,
                            lg:2
                        }}

                    >
                        <StaticProductsList
                            data={products}
                        />
                    </Box>
                    <Box
                        order={{
                            base: 2,
                            lg:1
                        }}
                    >
                        <Box position='sticky' top={10}>
                            <Stack
                                spacing={{ base: 4, lg:6 }}
                            >
                                <Heading
                                    fontWeight='normal'
                                    fontSize='2xl'
                                    color='brand.green.600'
                                >Nos dossier à propos des Mini-Jupes :</Heading>
                                <Box>
                                    <SideTitle>Guides&nbsp;</SideTitle>
                                    <List color='gray.900'>
                                        <ListItem fontSize='sm'>Choisir une mini-jupe</ListItem>
                                        <ListItem fontSize='sm'>Prendre ses mesures pour coudre une mini-jupe</ListItem>
                                        <ListItem fontSize='sm'>Dessiner une mini-jupe</ListItem>
                                        <ListItem fontSize='sm'>Avec quel haut associer une mini-jupe</ListItem>
                                        <ListItem fontSize='sm'>Mini jupe en hiver, quels collants choisir</ListItem>
                                    </List>
                                </Box>

                                <Box>
                                    <SideTitle>Actualites&nbsp;</SideTitle>
                                    <List color='gray.900'>
                                        <ListItem fontSize='sm'>Nouvelles mini-jupes au catalogue</ListItem>
                                        <ListItem fontSize='sm'>Concours autour de la jupe Else</ListItem>
                                        <ListItem fontSize='sm'>Les mini-jupes en haute couture</ListItem>
                                    </List>
                                </Box>

                                <Box>
                                    <SideTitle>Tutoriels&nbsp;</SideTitle>
                                    <List>
                                        <ListItem fontSize='sm'>→<Link to='/' color='brand.green.600'>Coudre la mini-jupe Alma</Link></ListItem>
                                        <ListItem fontSize='sm'>Ajouter une ceinture à la jupe Julia</ListItem>
                                        <ListItem fontSize='sm'>Customiser la jupe machine avec des poches</ListItem>
                                    </List>
                                </Box>

                            </Stack>
                        </Box>
                    </Box>
                </Grid>
            </Wrapper>


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
                contentful_id
                backendDocumentId
                title
                mainPicture
                price
                level
                slug
                pictures{ url }
                intro{ raw }
            }
        }
    }
}
`