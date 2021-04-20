import React from 'react'

import {
    Box,
    Center,
} from '@chakra-ui/react'


const AccountWrapper = ({ children, size }) => {
    return(
        <Center
            // minH='100vh'
        >
            <Box
                py='2rem'
                bg='white'
                w={ size ? size : '6xl' }
                p={{ base:10, lg: 26 }}
            >
                { children }
            </Box>
        </Center>
    )
}

export default AccountWrapper