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
import { AddIcon, ChatIcon, CopyIcon, InfoOutlineIcon, StarIcon, SunIcon, ViewIcon } from '@chakra-ui/icons';

const RatingDetails = ({ }) => {
    const [ racingDetail, setRatingDeatail ] = useState( false )
    return (
        <Center
            mt={10}
            borderRadius='md'
            p={{ base:32, lg:'64'}}
            border='dashed 3px'
            borderColor='gray.100'
        >
            <Text
                letterSpacing='widest'
                color='gray.500'
                textTransform='uppercase'
            >
                Rating details
            </Text>
        </Center>
    )
}

export default RatingDetails