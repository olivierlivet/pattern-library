import React, { useState } from 'react'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import Menu from './Menu'
import {
    Button,
    Flex,
    Text,
    Box 
} from '@chakra-ui/react'

const Header = () => {
    const [menuVisible, setMenuVisible] = useState( false )
    return(
        <>
        <Flex
            as={'header'}
            p={ 10 }
            background='green.50'
            justifyContent='space-between'
        >
            <Text>
                La Patronthèque v0
            </Text>
            <Button onClick={()=> setMenuVisible( !menuVisible )}>
                <AddIcon w={6} h={6} />
            </Button>
        </Flex>
        <Menu visible={ menuVisible } onClose={()=> setMenuVisible( !menuVisible )} />
        </>
    )
}

export default Header