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
            <Link color="blue.400" as={ GatsbyLink } to={ '/fr'+item.node.slug }>{ item.node.title }</Link>
            ) : 'null' }
        </Box>
    )
}

export default Nav