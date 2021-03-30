import React from 'react'

import { 
    Box 
} from '@chakra-ui/react'

const Header = () => {
    return(
        <Box
            as={'header'}
            p={ 10 }
            background='green.50'
        >
            La Patronthèque v0
        </Box>
    )
}

export default Header