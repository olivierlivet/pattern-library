import React from 'react'
import { graphql, navigate } from 'gatsby'
import Layout from '../Components/Layouts/base'
import SearchEngine from '../Components/SearchEngine'
import Nav from '../Components/Nav/Base'
import { Link as GatsbyLink } from 'gatsby'

import {
    Heading,
    Box,
    SimpleGrid,
    Image,
    Link,
    Stack,
    Text,
    Flex,
    Divider
} from '@chakra-ui/react'
import Wrapper from '../Components/Layouts/Wrapper'
import RichContent from '../Components/RichContent'
import { GatsbyImage } from 'gatsby-plugin-image'
import Helmet from 'react-helmet'
import Hierarchical from '../Components/Nav/Hierarchical'
import CtaSearch from '../Components/CtaSearch'

import PageHeader from '../Components/PageHeader'
import CtaOpenSearch from '../Components/CtaOpenSearch'
import { config } from '../config'
import { Twicpics } from "@twicpics/react";
import TwicImg from "@twicpics/react";

Twicpics({
    domain: config.imageCdnBaseUrl,
    defaultParams: {
      anticipation: 0.5,
      maxDpr: 2,
      step: 100,
    },
  });

const ReatlisationTemplate = (props) => {
    let pageContent = props.data.realisation
    let product = props.data.product

    product.product = { title: product.title, slug: product.slug }

    // pageContent.univers = pageContent.product.univers

    console.log('pageContent', pageContent)
    return (
        <Layout
            enableBackButton={false}
        >
            <Helmet>
                <title>{pageContent.title}</title>
                {/* <meta name='description' content={pageContent.descriptionSeo} /> */}
            </Helmet>

            <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                gap={20}
                maxW='1200px'
                mx='auto'
            >
                <Stack spacing={3} mb={10}>
                    {pageContent.pictures.url.map(picture =>
                        // <Image
                        //     src={`${config.imageCdnBaseUrl}${picture}`}
                        //     alt='Title'
                        // />
                        <TwicImg
                            key={`realisationImage-${picture}`}
                            w='500px'
                            h='500px'
                            src={`${picture}`} />
                    )}
                </Stack>
                <Box
                    position={{
                        base: `fixed`,
                        lg: `initial`
                    }}
                    bottom={0}
                    px={6}
                >
                    <Box
                        position='sticky'
                        top={20}
                        bg='white'
                        borderTopRadius='2xl'
                        boxShadow='sm'
                    >
                        <Stack
                            spacing={{
                                base:2,
                                lg:8
                            }}
                            p={{
                                base:8,
                                lg:'32 0'
                            }}
                        >
                            <Box>
                                <Hierarchical
                                    data={product}
                                />
                            </Box>
                            <Link
                                as={GatsbyLink}
                                to='../'
                                display={{
                                    base: 'inline',
                                    lg: 'none'
                                }}
                            >
                            ← Retour
                            </Link>

                            <Heading as='h1' fontWeight='normal'>{pageContent.title}</Heading>
                            <RichContent data={pageContent.description} />
                            <Divider />
                            <Text
                                color='gray.500'
                            >
                                La réalisation de { pageContent.data.firstName } vous plait, suivez son activité sur
                                {' '}<Link as='' color='gray.600' textDecor='underline' href={`https://instagram.com/${pageContent.data.instagramAccount}`}>
                                    Instagram
                                </Link>{' '}
                                 ou sur son
                                 {' '}<Link as='' color='gray.600' textDecor='underline' href={pageContent.data.blogUrl}>
                                    blog
                                </Link>
                                .
                            </Text>
                        </Stack>



                    </Box>
                </Box>
            </SimpleGrid>
        </Layout>
    )
}

export default ReatlisationTemplate

export const pageQuery = graphql`
query realisationQuery( $contentfulID: String!, $productId: String! ){
    realisation:contentfulRealisation(contentful_id: {eq: $contentfulID}) {
        contentful_id
        slug
        title
        description { raw }
        ##illustration { gatsbyImageData(layout: FULL_WIDTH) }

        #univers { contentful_id title slug }
        #category { contentful_id title slug }
        pictures{ url }
        data{
            instagramAccount
            blogUrl
            firstName
        }
    }
    product:contentfulProduct(contentful_id: {eq: $productId}) {
        slug
        title
        univers{ title slug }
        category{ title slug }
        variant{ title slug }
    }
}
`