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
import { AddIcon, ChatIcon, CopyIcon, InfoOutlineIcon, StarIcon, SunIcon, ViewIcon } from '@chakra-ui/icons';

const AccountRatings = ({ }) => {
    return (
        <AccountWrapper>
            <Box>
                <Heading my={7} color='#66878a' fontWeight='normal' fontSize='3xl'>Avis & commentaires</Heading>
            </Box>
            <Box>
                Évaluations de acheteurs
            </Box>
        </AccountWrapper>
    )
}

export default AccountRatings