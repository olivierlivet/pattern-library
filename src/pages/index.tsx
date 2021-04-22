import React from 'react'
import Helmet from "react-helmet"

const HomeRedirectPage = () => {
    return(
        <Helmet>
            <meta http-equiv="refresh" content="0;URL=/fr"></meta>
        </Helmet>
    )
}

export default HomeRedirectPage