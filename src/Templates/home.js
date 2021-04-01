import React, {useState} from 'react'
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
    Box
} from '@chakra-ui/react'

const HomeTemplate = ( props ) => {
    const pageContent = props.data.page
    const univers = props.data.univers.edges
    const products = props.data.products.edges

    const [showEngine, setShowEngine] = useState( false )
    return(
        <Layout
            enableBackButton = { false }
        >
            {/* <Heading as='h1'>Home: { pageContent.title }</Heading> */}
            {/* <pre>
                { JSON.stringify( props.data, null, 1 )}
            </pre> */}
            <HeroSearch handleLoadSearchEngine={()=> setShowEngine( true ) } />

            <Nav data={ univers } />

            <RichContent data={ pageContent.description } />
            <ProductsSummary data={ products } />
            
            <SearchEngineLoader filter={{ type:'skirt'}} onClose={ ()=>setShowEngine(false) } />
            { showEngine ? <SearchEngineLoader filter={{ type:'skirt'}} onClose={ ()=>setShowEngine(false) } /> : null }
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