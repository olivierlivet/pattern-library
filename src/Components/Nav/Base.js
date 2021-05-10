import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

import {
    Box,
    Link
} from '@chakra-ui/react'

const Nav = ({ data }) => {
    return(

        <Box
            py='2rem'
        >
            { data ? data.map( item =>
            <Link key={ item.node.slug } color="blue.700" as={ GatsbyLink } to={ item.node.slug }>{ item.node.title }</Link>
            ) : 'null' }
        </Box>
    )
}

export default Nav