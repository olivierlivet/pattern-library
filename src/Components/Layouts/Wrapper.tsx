import React, { FunctionComponent } from 'react'

import { Box } from '@chakra-ui/react'

type props = {
    children: Object
}

const Wrapper:FunctionComponent<props> = ({ children }) =>
    <Box
        maxW='1300px'
        mx='auto'
    >
        { children }
    </Box>

export default Wrapper