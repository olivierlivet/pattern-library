import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

import {
    Box,
    Button,
    Center,
    Flex,
    Grid,
    Link,
    VStack,
    Text,
    HStack,
    Heading,
    SimpleGrid
} from '@chakra-ui/react'

import { Router, Link as NavLink, Match } from "@reach/router";
import AccountWrapper from './Wrapper';
import AccountNav from '../Nav/Account';
import { AddIcon, ChatIcon, CopyIcon, InfoOutlineIcon, StarIcon, SunIcon, ViewIcon } from '@chakra-ui/icons';

const AccountHome = ({ }) => {
    return (
        <AccountWrapper>
            <Box>
                <Heading my={7} color='#66878a' fontWeight='normal' fontSize='3xl'>Dashboard éditeur partenaire</Heading>
            </Box>
            <SimpleGrid
                columns={{
                    base: `2`,
                    lg: `3`
                }}
                gap={{ base:2, lg:10 }}
            >
                <Box borderRadius='10px' bg='brand.pink.300' w={{ base:'full', lg:'full' }} p={{ base:4, lg:10 }}>
                    <VStack
                        align='flex-start'
                        spacing={0}
                    >
                        <InfoOutlineIcon color="white" w={30} h={30} />
                        <Text fontSize={{ base:'4xl', lg:'7xl' }} fontFamily='Noe Display' color='white'>34</Text>
                        <Text fontSize='md' color='white'>ventes</Text>
                    </VStack>
                </Box>
                <Box borderRadius='10px' bg='green.200' w={{ base:'full', lg:'full' }} p={{ base:4, lg:10 }}>
                    <VStack
                        align='flex-start'
                        spacing={0}
                    >
                        <ChatIcon color="white" w={30} h={30} />
                        <Text fontSize={{ base:'4xl', lg:'7xl' }} fontFamily='Noe Display' color='white'>234€</Text>
                        <Text fontSize='md' color='white'>chiffre d'affaire</Text>
                    </VStack>
                </Box>
                <Box borderRadius='10px' bg='gray.300' w={{ base:'full', lg:'full' }} p={{ base:4, lg:10 }}>
                    <VStack
                        align='flex-start'
                        spacing={0}
                    >
                        <Text fontSize={{ base:'4xl', lg:'7xl' }} fontFamily='Noe Display' color='white'>2,3%</Text>
                        <Text fontSize='md' color='white'>taux de conversion global</Text>
                    </VStack>
                </Box>
                <Box borderRadius='10px' bg='brand.pink.300' w={{ base:'full', lg:'full' }} p={{ base:4, lg:10 }}>
                    <VStack
                        align='flex-start'
                        spacing={0}
                    >
                        <ViewIcon color="white" w={30} h={30} />
                        <Text fontSize={{ base:'4xl', lg:'7xl' }} fontFamily='Noe Display' color='white'>1000</Text>
                        <Text fontSize='md' color='white'>visites</Text>
                    </VStack>
                </Box>
                <Box borderRadius='10px' bg='green.200' w={{ base:'full', lg:'full' }} p={{ base:4, lg:10 }}>
                    <VStack
                        align='flex-start'
                        spacing={0}
                    >
                        <StarIcon color="white" w={30} h={30} />
                        <Text fontSize={{ base:'4xl', lg:'7xl' }} fontFamily='Noe Display' color='white'>4.4/5</Text>
                        <Text fontSize='md' color='white'>Indice de satisfaction</Text>
                    </VStack>
                </Box>
                <Box borderRadius='10px' bg='gray.300' w={{ base:'full', lg:'full' }} p={{ base:4, lg:10 }}>
                    <VStack
                        align='flex-start'
                        spacing={0}
                    >
                        <CopyIcon color="white" w={30} h={30} />
                        <Text fontSize={{ base:'4xl', lg:'7xl' }} fontFamily='Noe Display' color='white'>14</Text>
                        <Text fontSize='md' color='white'>Patrons au catalogue</Text>
                    </VStack>
                </Box>
            </SimpleGrid>
        </AccountWrapper>
    )
}

export default AccountHome