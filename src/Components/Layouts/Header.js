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

const Header = () => {
    const [menuVisible, setMenuVisible] = useState( false )
    return(
        <>
        <Flex
            as={'header'}
            p={ 10 }
            background='#efccbf'
            justifyContent='space-between'
        >
            <Text>
                Patterns Corner
            </Text>
            <HStack>
                {/* <Link to={`/fr/a-propos/`}>
                    À propos
                </Link>
                <Link to={`/fr/a-propos/#newsletter`}>
                    Newsletter
                </Link> */}
                {/* <Button onClick={()=> setMenuVisible( !menuVisible )}>
                    <SmallAddIcon w={6} h={6} /> Menu
                </Button> */}
            </HStack>
            
        </Flex>
        {/* <Menu visible={ menuVisible } onClose={()=> setMenuVisible( !menuVisible )} /> */}
        </>
    )
}

export default Header