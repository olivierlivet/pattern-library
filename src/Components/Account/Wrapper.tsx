import React from 'react'

import {
    Box,
    Center,
} from '@chakra-ui/react'


const AccountWrapper = ({ children }) => {
    return(
        <Center
            // minH='100vh'
        >
            <Box
                py='2rem'
                bg='white'
                w='6xl'
                p={{ base:10, lg: 26 }}
            >
                { children }
            </Box>
        </Center>
    )
}

export default AccountWrapper