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
} from '@chakra-ui/react'
import Helmet from 'react-helmet'
import { config } from '../config'
import Wrapper from '../Components/Layouts/Wrapper'

const ProductTemplate = (props) => {
    const pageContent = props.data.product

    console.log('product data', pageContent)
    return (
        <Layout
            enableBackButton={false}
        >
            <Helmet>
                <title>
                    {`${pageContent.title} -
                    ${pageContent.editor ? pageContent.editor.title : ''}
                    ${config.titleSuffix}`}
                </title>
            </Helmet>
            <Wrapper>
                <Box px={10}>
                    <HierarchicalNav
                        data={pageContent}
                    />
                </Box>
            </Wrapper>

            <ProductPage
                data={props.data.product}
                displayCloseButton={false}
                context='page'
            />
        </Layout >
    )
}

export default ProductTemplate

export const pageQuery = graphql`
query adQuery( $contentfulID: String! ){
    product:contentfulProduct(contentful_id: {eq: $contentfulID}) {
        contentful_id
        backendDocumentId
        slug
        title
        intro{ raw }
        description { raw }
        level
        price
        mainPicture
        pictures{ url }
        editor{ title slug }
        univers{ title slug }
        category{ title slug }
        variant{ title slug }

        furnitures{ raw }
        fabrics{ raw }
        measures{ data{ label values } }
      }
}
`