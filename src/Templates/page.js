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

            <Heading>
                { pageContent.title }
            </Heading>


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
      }
}
`