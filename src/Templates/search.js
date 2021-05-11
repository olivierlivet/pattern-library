import React from 'react'
import { graphql } from 'gatsby'
import EmptyLayout from '../Components/Layouts/empty'
import ProductPage from '../Components/Product/ProductPage'
import HierarchicalNav from '../Components/Nav/Hierarchical'

import { navigate, useLocation } from "@reach/router"

// import {
//     StaticImage,
//     // GatsbyImage
// } from "gatsby-plugin-image"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Center,
    Heading,
    Spinner
} from '@chakra-ui/react'
import SearchEngineLoader from '../Components/SearchEngine/Loader'
import Helmet from 'react-helmet'
import getUrlParams from '../Utils/querystring'
import Loadable from "@loadable/component"

const SearchTemplate = (props) => {
    const location = useLocation()
    const qs = getUrlParams(location.search)

    const SearchEngine = Loadable(() => import('../Components/SearchEngine/index'))

    return (
        <EmptyLayout>
            <Helmet>
                <title>Recherche de patrons de couture ¬ ThePatternsCorner</title>
                <meta name='canonical' content={`https://thepatternscorner.com/fr`} />
            </Helmet>

            { !SearchEngine ?
                <Center minH='100vh'><Spinner /></Center>
                :
                <SearchEngine
                    mainFilters={{ category: qs.category ? qs.category : null }}
                    // onClose={() => onClose()}
                    onClose={() => navigate('../')}
                />
            }

            {/* <SearchEngine
                mainFilters={{ category: qs.category ? qs.category : null }}
                // onClose={() => onClose()}
                onClose={()=> navigate('../')}
            /> */}

        </EmptyLayout>
    )
}

export default SearchTemplate
