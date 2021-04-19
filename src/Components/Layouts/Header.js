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
import UserNav from '../Nav/User'

const Header = () => {
    const [menuVisible, setMenuVisible] = useState( false )
    return(
        <>
        <Flex
            as={'header'}
            p={{ base:4, lg: 10 } }
            pb={ 2 }
            bg='linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7693452380952381) 70%, rgba(255,255,255,.75) 100%)'
            justifyContent='space-between'

            position='fixed'
            top={ 0 }
            left={ 0 }
            right={ 0 }
            zIndex='toast'

            alignContent='flex-end'
            alignItems='center'
        >   
        <Flex>
        <Text
                fontFamily='DM Sans'
                textTransform='uppercase'
                fontWeight='normal'
                fontSize='8px'
                color='gray.600'
                mr={1}
                // w='10px'
                // h='10px'
                whiteSpace='pre'
                // line-height='22px'
                transform='rotate(-90deg) translateY(4px)'
            >
                The
            </Text>
            
            <Text
                fontFamily='Noe Display'
                fontWeight='normal'
            >
                Patterns Corner
            </Text>
        </Flex>

            <HStack spacing={ 4 }>
                <UserNav />
            </HStack>
            
        </Flex>
        {/* <Menu visible={ menuVisible } onClose={()=> setMenuVisible( !menuVisible )} /> */}
        </>
    )
}

export default Header