import React, { useState } from 'react'
import { PhoneIcon, AddIcon, WarningIcon, SmallAddIcon } from '@chakra-ui/icons'
import Menu from './Menu'
import {
    Button,
    Flex,
    Link,
    Text,
    Box, 
    HStack
} from '@chakra-ui/react'

const Footer = () => {
    const [menuVisible, setMenuVisible] = useState( false )
    return(
        <Box
            as='footer'
        >
            Footer
        </Box>
    )
}

export default Footer