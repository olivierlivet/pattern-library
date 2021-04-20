import React from 'react'

import {
    Box,
    Center,
} from '@chakra-ui/react'
import AccountNav from '../../Components/Nav/Account'


const AccountWrapper = ({ children, size }) => {
    return(
        <>
        <Box
            mt={20}
            // display='none'
        >
            <AccountNav />
        </Box>
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
        </>
    )
}

export default AccountWrapper