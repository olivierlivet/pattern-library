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
    Heading,
    Text
} from '@chakra-ui/react'
import Wrapper from '../Components/Layouts/Wrapper'
import RichContent from '../Components/RichContent'

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
                py={{ base: 24, lg: 32 }}
            >
                <Heading
                    textAlign='center'
                    fontWeight='normal'
                    as='h1'
                >
                    {pageContent.title}
                </Heading>
                <Wrapper>
                    <RichContent data={pageContent.description} />

                </Wrapper>
            </Box>



            {/* <StaticImage
                src="https://placekitten.com/800/600"
                alt="A kitten"
                formats={['auto', 'avif', 'webp']}
            /> */}


            <div>
                {/* <StaticImage
                    src={`https://images.ctfassets.net/e6euex8rtwnm/523FbtWgb4UHwARkyac2Jm/fabddc082975170488339aca75098da0/chemisier.jpeg?w=400&q=50`}
                    alt={ 'pageContent.title' }
                /> */}

            </div>
            {/* <pre>
                { JSON.stringify( props, null, 1 )}
            </pre> */}
        </Layout>
    )
}

export default PageTemplate

export const pageQuery = graphql`
query pageQuery( $contentfulID: String! ){
    page:contentfulPage(contentful_id: {eq: $contentfulID}) {
        slug
        title
        description { raw }
        descriptionSeo
        titleSeo
      }
}
`