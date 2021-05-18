import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../Components/Layouts/base'
import ProductPage from '../Components/Product/ProductPage'
import HierarchicalNav from '../Components/Nav/Hierarchical'
// import {
//     StaticImage,
//     // GatsbyImage
// } from "gatsby-plugin-image"

import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Center,
    Heading,
    Text
} from '@chakra-ui/react'
import Wrapper from '../Components/Layouts/Wrapper'
import RichContent from '../Components/RichContent'
import AboutPageModule from '../Components/AboutPage'

const PageTemplate = (props) => {
    const pageContent = props.data.page
    return (
        <Layout
            enableBackButton={false}
        >
            {/* <pre>
                { JSON.stringify( pageContent.pictures, null, 1 )}
            </pre> */}
            {/* <HierarchicalNav
                data={ pageContent }
            /> */}

            <Box
                // py={{ base: 24, lg: 24 }}
                // px={{ base: 24, lg: 32, xl:'72' }}
                mx='auto'
                maxW='700px'
                py={{
                    base: 10,
                    lg: 0
                }}
                px={{
                    base: 4,
                    lg: 0
                }}
            >

                <Center
                    flex='1'
                    color='gray.500'
                >

                    <HierarchicalNav
                        data={pageContent}
                    />
                </Center>
                <Heading
                    textAlign='center'
                    fontWeight='normal'
                    as='h1'
                // mb={{ base:'24', lg:'28'}}
                >
                    {pageContent.title}
                </Heading>
                <Center my={12} flex='1'>✂️✂️✂️</Center>
                <Wrapper>
                    <RichContent
                        data={pageContent.description}
                        fontSize={{ base: 'md', lg: 'lg' }}
                        spacing={{ base: 4, lg: 8 }}
                    />

                    {/* <div>
                        <pre>
                            { JSON.stringify( props , null, 1 )}
                        </pre>
                    </div> */}


                </Wrapper>
            </Box>
            <Wrapper>
                <Box mx='auto'>
                    {props.pageContext.slug === '/fr/a-propos/' ?
                        <AboutPageModule />
                        : null
                    }
                </Box>

            </Wrapper>
        </Layout>
    )
}

export default PageTemplate

export const pageQuery = graphql`
query pageQuery( $contentfulID: String! ){
    page:contentfulPage(contentful_id: {eq: $contentfulID}) {
        slug
        title
        descriptionSeo
        titleSeo

        univers{ title slug }
        category{ title slug }
        variant{ title slug }


        description {
            raw
            references{
                ... on ContentfulProduct {
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
}
`