import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../Components/Layouts/base'
import ProductPage from '../Components/Product/ProductPage'
// import {
//     StaticImage,
//     // GatsbyImage
// } from "gatsby-plugin-image"

import {
    Heading
} from '@chakra-ui/react'

const ProductTemplate = ( props ) => {
    const pageContent = props.data.product
    return(
        <Layout
            enableBackButton = { true }
        >
            <ProductPage
                data={ props.data.product }
            />
            {/* <StaticImage
                src="https://placekitten.com/800/600"
                alt="A kitten"
                formats={['auto', 'avif', 'webp']}
            /> */}
            {/* <pre>
                { JSON.stringify( pageContent, null, 1 )}
            </pre> */}
            
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
        slug
        title
        intro{ raw }
        description { raw }
        level
        price
        picture { file { url } }
        #pictures
        editor{ title }
      }
}
`