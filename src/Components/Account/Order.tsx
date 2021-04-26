import React, { useState } from 'react'
import { Link as GatsbyLink } from 'gatsby'

import {
    Box,
    Button,
    Center,
    Flex,
    Heading,
    HStack,
    Link,
    Text,
    VStack
} from '@chakra-ui/react'

import { Router, Link as NavLink, Match } from "@reach/router";
import AccountWrapper from './Wrapper';
import AccountTitle from './Title';
import DownloadModal from './DownloadModal'

const AccountOrder = ({ }) => {
    const [isDownloadModalDisplay, setIsDownloadModalDisplay] = useState(false)
    
    return (
        <>
            <AccountWrapper>
                <AccountTitle>
                    Vos commandes
            </AccountTitle>
                <Text>Liste des commandes de patron, accès au téléchargement de patron dématérialisé</Text>
                <Box>
                    <VStack spacing={8}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item =>
                            <Box bg='white' w='full' boxShadow='md' py={3} px={5} borderRadius='lg'>
                                <Flex justify='space-between' align='center'>
                                    <Heading fontSize='md' fontFamily='Noe display' fontWeight='normal' color='#66878a' textTransform='none' letterSpacing='wider' p='0' m='0'>
                                        Achat #604d08171c
                                    </Heading>
                                    <HStack
                                        spacing={2}
                                        color='gray.400'
                                        fontWeight='bold'
                                        fontSize='sm'
                                    >
                                        <Text>
                                            Jupe Rita
                                        </Text>
                                        <Text>—</Text>
                                        <Text>Téléchargement : 1/3</Text>
                                        <Button onClick={() => setIsDownloadModalDisplay(item)} size='sm'>Télécharger maintenant</Button>
                                    </HStack>
                                </Flex>
                            </Box>)}
                    </VStack>
                </Box>
            </AccountWrapper>
            <DownloadModal
                isVisible={isDownloadModalDisplay}
                onClose={ ()=> setIsDownloadModalDisplay( false )}
            />
        </>
    )
}

export default AccountOrder