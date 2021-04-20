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
import SearchEngineLoader from '../Components/SearchEngine/Loader'
import Helmet from 'react-helmet'

const SearchTemplate = ( props ) => {
    return(
        <Layout
            enableBackButton = { false }
        >
            <Helmet>
                <title>Recherche de patrons de couture ¬ ThePatternsCorner</title>
                <meta name='canonical' content={`https://patternscorner.com/fr`} />
            </Helmet>
            <SearchEngineLoader
                    // filter={{
                    //     category: category ? category : null,
                    //     variant: variant ? variant : null
                    // }}
                    // onClose={() => setShowEngine(false)}
                />
        </Layout>
    )
}

export default SearchTemplate
