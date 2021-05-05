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
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Heading
} from '@chakra-ui/react'

const ProductTemplate = ( props ) => {
    const pageContent = props.data.product
    return(
        <Layout
            enableBackButton = { false }
        >
            {/* <pre>
                { JSON.stringify( pageContent.pictures, null, 1 )}
            </pre> */}
            <HierarchicalNav
                data={ pageContent }
            />
            <ProductPage
                data={ props.data.product }
                displayCloseButton= { false }
            />
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

export default ProductTemplate

export const pageQuery = graphql`
query adQuery( $contentfulID: String! ){
    product:contentfulProduct(contentful_id: {eq: $contentfulID}) {
        contentful_id
        slug
        title
        intro{ raw }
        description { raw }
        level
        price
        picture { file { url } }
        pictures{ content }
        editor{ title }
        univers{ title slug }
        category{ title slug }
        variant{ title slug }
      }
}
`