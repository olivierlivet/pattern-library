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
    Heading
} from '@chakra-ui/react'

import { Router, Link as NavLink, Match } from "@reach/router";
import AccountWrapper from './Wrapper';
import AccountNav from '../Nav/Account';
import { AddIcon, StarIcon } from '@chakra-ui/icons';

const AccountHome = ({ }) => {
    return (
        <AccountWrapper>
            <Box>
                <Heading my={7} color='#66878a' fontWeight='normal' fontSize='3xl'>Vos ventes</Heading>
            </Box>
            <Grid
                templateColumns={{
                    base: `300px 1fr`
                }}
                gap={10}
            >
                <Box>
                    <VStack spacing={4} position='sticky' top={10}>
                        <Box borderRadius='10px' bg='brand.pink.300' w='300px' p={10}>
                            <VStack
                                align='flex-start'
                                spacing={0}
                            >
                                <Text fontSize='7xl' fontFamily='Noe Display' color='white'>14</Text>
                                <Text fontSize='md' color='white'>patrons</Text>
                            </VStack>
                        </Box>
                        <Box borderRadius='10px' bg='green.200' w='300px' p={10}>
                            <VStack
                                align='flex-start'
                                spacing={0}
                            >
                                <Text fontSize='7xl' fontFamily='Noe Display' color='white'>1000</Text>
                                <Text fontSize='md' color='white'>visites cumulées</Text>
                            </VStack>
                        </Box>
                        <Box borderRadius='10px' bg='gray.300' w='300px' p={10}>
                            <VStack
                                align='flex-start'
                                spacing={0}
                            >
                                <Text fontSize='7xl' fontFamily='Noe Display' color='white'>2,3%</Text>
                                <Text fontSize='md' color='white'>taux de conversion global</Text>
                            </VStack>
                        </Box>                    
                    </VStack>
                </Box>
                <Box>
                    <VStack spacing={8}>
                        {[1, 2, 3, 4, 5,6,7,8,9,10].map(item =>
                            <Box bg='white' w='full' boxShadow='md' py={3} px={5} borderRadius='lg'>
                                <Flex justify='space-between' align='center'>
                                    <Heading fontSize='md' fontFamily='Noe display' fontWeight='normal' color='#66878a' textTransform='none' letterSpacing='wider' p='0' m='0'>
                                        Jupe Rita
                                    </Heading>
                                    <HStack
                                        spacing={2}
                                        color='gray.400'
                                        fontWeight='bold'
                                    >
                                        <Text>
                                            200 visites
                                    </Text>
                                        <Text>—</Text>
                                        <Text>
                                            3 achats
                                    </Text>
                                        <Text>—</Text>
                                        <Text>
                                            Évaluation : 4,3 <StarIcon color='yellow.400' />
                                        </Text>
                                        <Button size='sm'>
                                            <AddIcon />
                                        </Button>


                                    </HStack>
                                </Flex>
                            </Box>)}
                    </VStack>
                </Box>
            </Grid>
        </AccountWrapper>
    )
}

export default AccountHome