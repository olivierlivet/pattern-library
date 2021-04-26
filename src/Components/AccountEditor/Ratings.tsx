import React, { useState } from 'react'
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

import { Router, Link as NavLink, Match } from "@reach/router"
import AccountWrapper from './Wrapper'
import AccountNav from '../Nav/Account'
import RatingDetails from './RatingDetails'
import { AddIcon, ChatIcon, CopyIcon, InfoOutlineIcon, MinusIcon, StarIcon, SunIcon, ViewIcon } from '@chakra-ui/icons';

const AccountRatings = ({ }) => {
    const [ racingDetail, setRatingDeatail ] = useState( false )
    return (
        <AccountWrapper>
            <Box>
                <Heading my={7} color='#66878a' fontWeight='normal' fontSize='3xl'>Avis & commentaires</Heading>
            </Box>
            <Box>
                Les personnes ayant cousu vos patrons sont invitées à donner leur avis sur le déroulement du projet et la satisfaction rencontrée au cours de leur couture. Voici la restitution transparente des avis donnés :
            </Box>
            <VStack
                my={{ base: 2, lg: 6 }}
                spacing={{ base: 2, lg: 6 }}
            >



                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item =>

                    <Box
                        bg='white'
                        w='full'
                        boxShadow='md'
                        py={3}
                        px={5}
                        borderRadius='lg'

                    >
                        <Flex justify='space-between' align='center'>
                            <Heading fontSize='md' fontFamily='Noe display' fontWeight='normal' color='#66878a' textTransform='none' letterSpacing='wider' p='0' m='0'>
                                Avis #604d08171c
                                    </Heading>
                            <HStack
                                spacing={2}
                                color='gray.400'
                                fontWeight='bold'
                                fontSize='sm'
                            >
                                <Text>
                                    <StarIcon color='yellow.300' />
                                    <StarIcon color='yellow.300' />
                                    <StarIcon color='yellow.300' />
                                    <StarIcon color='yellow.300' />
                                    <StarIcon />
                                </Text>
                                <Text>—</Text>

                                <Text>
                                    Jupe Rita
                                        </Text>
                                <Text>—</Text>

                                <Text>
                                    25/04/2021 @ 15h55
                                        </Text>
                                <Button
                                    size='sm'
                                    onClick={()=>setRatingDeatail( racingDetail !== item ? item : false )}

                                >
                                    {
                                        racingDetail !== item ?
                                            <AddIcon />
                                        :
                                            <MinusIcon />
                                    }
                                    
                                </Button>



                            </HStack>
                        </Flex>

                        { racingDetail === item ?
                            <RatingDetails id={item} />
                        : null}

                    </Box>)}
            </VStack>

        </AccountWrapper>
    )
}

export default AccountRatings