import React, { FunctionComponent } from 'react'

import {
    Box,
    Center,
} from '@chakra-ui/react'
import AccountNav from '../../Components/Nav/Account'

type props = {
    children: Object,
    size: String,
    hideNav: Boolean
}

const AccountWrapper:FunctionComponent<props> = ({ children, size, hideNav }) => {
    return(
        <>
        { !hideNav ?
        <Box
            mt={20}
        >
            <AccountNav />
        </Box>
        : null }
        <Center
            mx='auto'
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