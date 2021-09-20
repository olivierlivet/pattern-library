import React, { useEffect, useState } from 'react'
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
import { AddIcon, StarIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { config } from '../../config';
import { authenticationService } from '../../Service/auth';

const AccountPayments = ({ }) => {

    const [data, setData] = useState();
    useEffect(async () => {
        const result = await axios.get(
            `${config.apiUrl}/payment/editor/${ authenticationService.getEditor().editorId }`
        );
        setData(result.data);
    }, []);

    var censorWord = function (str) {
        return str[0] + str[1] + "*".repeat(str.length - 4) + str.slice(-2);
    }

    var censorEmail = function (email) {
        var arr = email.split("@");
        return censorWord(arr[0]) + "@" + censorWord(arr[1]);
    }

    return (
        <AccountWrapper>
            <Box>
                <Heading my={7} color='#66878a' fontWeight='normal' fontSize='3xl'>Vos paiements</Heading>
            </Box>
            <Grid
                templateColumns={{
                    base: `300px 1fr`
                }}
                gap={10}
            >
                {data ?
                    <Box>
                        <VStack spacing={4} position='sticky' top={10}>
                            <Box borderRadius='10px' bg='brand.pink.300' w='300px' p={10}>
                                <VStack
                                    align='flex-start'
                                    spacing={0}
                                >
                                    <Text fontSize='7xl' fontFamily='Noe Display' color='white'>{data.length}</Text>
                                    <Text fontSize='md' color='white'>{data.length <= 1 ? 'paiement' : 'paiements'}</Text>
                                </VStack>
                            </Box>
                            <Box borderRadius='10px' bg='green.200' w='300px' p={10}>
                                <VStack
                                    align='flex-start'
                                    spacing={0}
                                >
                                    <Text fontSize='7xl' fontFamily='Noe Display' color='white'>234€</Text>
                                    <Text fontSize='md' color='white'>Solde</Text>
                                </VStack>
                            </Box>
                        </VStack>
                    </Box>
                    : null}
                <Box>

                    {data ?
                        <VStack spacing={4}>
                            {/* <SimpleGrid columns={2} justify='space-between' bg='white' w='full' boxShadow='md' py={3} px={5} borderRadius='lg'>
                                <Box>
                                    Solde :{' '}<Text as='span' color='green.300'>+ 125€</Text>
                                </Box>
                                <Box>
                                    <Text textAlign='right'> 
                                        Prochain paiement : 01/06/2021
                                    </Text>
                                </Box>
                            </SimpleGrid> */}

                            {data.map(item =>
                                <Box bg='white' w='full' boxShadow='md' py={3} px={5} borderRadius='lg'>
                                    <Flex justify='space-between' align='center'>
                                        <Heading fontSize='md' fontFamily='Noe display' fontWeight='normal' color='#66878a' textTransform='none' letterSpacing='wider' p='0' m='0'>
                                            Paiement #{item._id.slice(item._id.length - 5, item._id.length)}
                                        </Heading>
                                        <HStack
                                            spacing={2}
                                            color='gray.400'
                                            fontWeight='bold'
                                            fontSize='sm'
                                        >
                                            <Text>
                                                { item.createdAt }
                                            </Text>
                                            <Text>—</Text>
                                            <Text color='green.500'>{ item.amount }€</Text>
                                        </HStack>
                                    </Flex>
                                </Box>)}

                                <Text fontSize='sm' color='gray.500'>
                                    Vous recevez un paiment à chaque début de mois si votre solde est supérieur à 100€. Le virement effectué correspond à l'intégralité de votre solde au moment du déclenchement du paiement.
                                </Text>
                        </VStack>
                        : 
                        <Center color='gray.500'>Vous n'avez pas encore reçu de paiment</Center>
                        }

                </Box>
            </Grid>
        </AccountWrapper>
    )
}

export default AccountPayments