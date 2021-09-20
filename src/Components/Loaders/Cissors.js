import React from 'react'

import {
    Center,
    // Image
} from '@chakra-ui/react'

import CissorsImage from './Cissors.svg'

const CissorsLoader = () => {
    return(
        <Center>
            <object style={{ width:'50px', height:'50px'}} type="image/svg+xml" data={CissorsImage}>svg-animation</object>
        </Center>
    )
}

export default CissorsLoader