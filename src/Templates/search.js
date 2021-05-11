import React from 'react'
import EmptyLayout from '../Components/Layouts/empty'
import { navigate, useLocation } from "@reach/router"
import {
    Center,
    Spinner
} from '@chakra-ui/react'
import Helmet from 'react-helmet'
import getUrlParams from '../Utils/querystring'
import Loadable from 'react-loadable'

const SearchTemplate = (props) => {
    const location = useLocation()
    const qs = getUrlParams(location.search)
    const loading = () => (<Center minH='100vh' w='100vw'><Spinner /></Center>)
    const SearchEngine = Loadable({
        loader: () => import('../Components/SearchEngine/index'),
        loading: loading,
    });
    return (
        <EmptyLayout>

            <Helmet>
                <title>Recherche de patrons de couture ¬ ThePatternsCorner</title>
                <meta name='canonical' content={`https://thepatternscorner.com/fr`} />
            </Helmet>

            <SearchEngine
                mainFilters={{ category: qs.category ? qs.category : null }}
                onClose={() => navigate('../')}
            />

        </EmptyLayout>
    )
}

export default SearchTemplate