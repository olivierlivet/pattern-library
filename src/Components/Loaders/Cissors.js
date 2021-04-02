import React from 'react'

import {
    Box,
    Image
} from '@chakra-ui/react'

import CissorsImage from './Cissors.svg'

const CissorsLoader = () => {
    return(
        <Box>
            <object style={{ width:'50px', height:'50px'}} type="image/svg+xml" data={CissorsImage}>svg-animation</object>
        </Box>
    )
}

export default CissorsLoader