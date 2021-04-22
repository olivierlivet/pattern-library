import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../Components/Layouts/base'
import ProductPage from '../Components/Product/ProductPage'
import HierarchicalNav from '../Components/Nav/Hierarchical'

import { useLocation } from "@reach/router"

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
import SearchEngineLoader from '../Components/SearchEngine/Loader'
import Helmet from 'react-helmet'
import getUrlParams from '../Utils/querystring'

const SearchTemplate = ( props ) => {
    const location = useLocation()
    const qs = getUrlParams( location.search )


    return(
        <Layout
            enableBackButton = { false }
        >
            <Helmet>
                <title>Recherche de patrons de couture ¬ ThePatternsCorner</title>
                <meta name='canonical' content={`https://thepatternscorner.com/fr`} />
            </Helmet>
            <pre>
                { JSON.stringify( qs, null, 1 )}
            </pre>
            <SearchEngineLoader
                filter={{
                    category: qs.category ? qs.category : null,
                    // variant: variant ? variant : null
                }}
            />
        </Layout>
    )
}

export default SearchTemplate
