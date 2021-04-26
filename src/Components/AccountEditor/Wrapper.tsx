import React from 'react'

import {
    Box,
    Center,
} from '@chakra-ui/react'
import AccountEditorNav from '../../Components/Nav/AccountEditor'


const AccountWrapper = ({ children, size }) => {
    return(
        <>
        <Box
            mt={20}
            // display='none'
        >
            <AccountEditorNav />
        </Box>
        <Center
            // minH='100vh'
        >
            <Box
                py='2rem'
                bg='transparent'
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