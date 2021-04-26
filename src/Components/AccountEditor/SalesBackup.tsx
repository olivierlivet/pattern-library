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

const AccountSales = ({ }) => {



var censorWord = function (str) {
   return str[0]+str[1] + "*".repeat(str.length - 4) + str.slice(-2);
}

var censorEmail = function (email){
     var arr = email.split("@");
     return censorWord(arr[0]) + "@" + censorWord(arr[1]);
}

    return (
        <AccountWrapper>
            <Box>
                <Heading my={7} color='#66878a' fontWeight='normal' fontSize='3xl'>Vente de vos patrons</Heading>
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
                                <Text fontSize='7xl' fontFamily='Noe Display' color='white'>34</Text>
                                <Text fontSize='md' color='white'>ventes</Text>
                            </VStack>
                        </Box>
                        <Box borderRadius='10px' bg='green.200' w='300px' p={10}>
                            <VStack
                                align='flex-start'
                                spacing={0}
                            >
                                <Text fontSize='7xl' fontFamily='Noe Display' color='white'>234€</Text>
                                <Text fontSize='md' color='white'>chiffre d'affaire</Text>
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

                                        <Text>
                                            25/04/2021 @ 15h55
                                        </Text>
                                        <Text>—</Text>
                                        
                                        <Text>{ censorEmail('oli.livet@gmail.com') }</Text>


                                    </HStack>
                                </Flex>
                            </Box>)}
                    </VStack>
                </Box>
            </Grid>
        </AccountWrapper>
    )
}

export default AccountSales