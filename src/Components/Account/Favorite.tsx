import React, { useEffect, useState } from 'react'
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
import { authenticationService } from '../../Service/auth'
import axios from 'axios';
import { config } from '../../config';

const AccountFavorite = ({ }) => {
    const [favorites, setFavorites] = useState(false)

    useEffect(() => {
        getUserFavorites()
    }, []);

    const getUserFavorites = () => {
        let userId = authenticationService.getUser().userId
        axios.get(
            `${config.apiUrl}/favorite/user/${userId}`
        ).then((response)=> setFavorites( response.data))
        console.log('getUserFavorites')
    }

    return (
        <>
            <AccountWrapper>
                <AccountTitle>
                    Vos patrons favoris
                </AccountTitle>
                <Text>Voici le patrons que vous avez ajouté à votre liste de favoris.</Text>
                <Box>
                    <VStack spacing={8}>
                        { favorites ? 
                            favorites.length ?
                            favorites.map(item =>
                            <Box bg='white' w='full' boxShadow='md' py={3} px={5} borderRadius='lg'>
                                { item._id }
                            </Box>)
                            : null : null }
                    </VStack>
                </Box>
            </AccountWrapper>
        </>
    )
}

export default AccountFavorite