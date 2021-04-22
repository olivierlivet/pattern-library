import React from 'react'
import Helmet from "react-helmet"

const HomeRedirectPage = () => {
    return(
        <Helmet>
            <meta name="redirect" content="/fr" />
        </Helmet>
    )
}