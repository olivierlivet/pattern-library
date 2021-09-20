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
    Heading
} from '@chakra-ui/react'

import { Router, Link as NavLink, Match } from "@reach/router";
import AccountWrapper from './Wrapper';
import AccountNav from '../Nav/Account';
import { AddIcon, CopyIcon, StarIcon, ViewIcon } from '@chakra-ui/icons';
import axios from 'axios'
import { config } from '../../config'

const AccountProducts = ({ }) => {

    const [data, setData] = useState();

    useEffect(async () => {
        const result = await axios.get(
            `${config.apiUrl}/product/editor/${ JSON.parse(localStorage.getItem('tpcEditor')).editorId }`
        );
        setData(result.data);
    }, []);

    const totalViews = ( data ) => {
        let total:number = 0;
        for (let index = 0; index < data.length; index++) {
            total = data[index].views + total;
        }
        return total;

    }


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
                { data ? 
                <Box>
                    <VStack spacing={4} position='sticky' top={10}>
                        <Box borderRadius='10px' bg='brand.pink.300' w='300px' p={10}>
                            <VStack
                                align='flex-start'
                                spacing={0}
                            >
                                <CopyIcon color="white" w={30} h={30} />
                                <Text fontSize='7xl' fontFamily='Noe Display' color='white'>{ data.length }</Text>
                                <Text fontSize='md' color='white'>patrons</Text>
                            </VStack>
                        </Box>
                        <Box borderRadius='10px' bg='green.200' w='300px' p={10}>
                            <VStack
                                align='flex-start'
                                spacing={0}
                            >
                                <ViewIcon color="white" w={30} h={30} />
                                <Text fontSize='7xl' fontFamily='Noe Display' color='white'>{ totalViews( data ) }</Text>
                                <Text fontSize='md' color='white'>visites cumulées</Text>
                            </VStack>
                        </Box>
                        {/* <Box borderRadius='10px' bg='gray.300' w='300px' p={10}>
                            <VStack
                                align='flex-start'
                                spacing={0}
                            >
                                <StarIcon color="white" w={30} h={30} />
                                <Text fontSize='7xl' fontFamily='Noe Display' color='white'>4,8</Text>
                                <Text fontSize='md' color='white'>Évaluation globale cumulée</Text>
                            </VStack>
                        </Box> */}
                    </VStack>
                </Box>
                : null }
                <Box>
                    { data ? 
                    <VStack spacing={8}>
                        {data.map(item =>
                            <Box bg='white' w='full' boxShadow='md' py={3} px={5} borderRadius='lg'>
                                <Flex justify='space-between' align='center'>
                                    <Heading fontSize='md' fontFamily='Noe display' fontWeight='normal' color='#66878a' textTransform='none' letterSpacing='wider' p='0' m='0'>
                                        { item.title }
                                    </Heading>
                                    <HStack
                                        spacing={2}
                                        color='gray.400'
                                        fontWeight='bold'
                                    >
                                        <Text>
                                            {item.views} visites
                                    </Text>
                                        <Text>—</Text>
                                        <Text>
                                            3 achats
                                    </Text>
                                        <Text>—</Text>
                                        <Text>
                                            Évaluation : {item.rating} <StarIcon color='yellow.400' />
                                        </Text>
                                        <Button
                                            as={ 'a' }
                                            target='_blank'
                                            href={ item.slug }
                                            size='sm'>
                                            <AddIcon />
                                        </Button>


                                    </HStack>
                                </Flex>
                            </Box>)}
                    </VStack>
                    : null }
                </Box>
            </Grid>
        </AccountWrapper>
    )
}

export default AccountProducts