import React, { useState } from 'react'
import { Link as GatsbyLink } from 'gatsby'

import {
    Box,
    Button,
    Center,
    Heading,
    Link,
    Stack,
    Text
} from '@chakra-ui/react'

import { Router, Link as NavLink, Match } from "@reach/router";
import AccountWrapper from './Wrapper';
import Form from '../Inspiration/Form'
const InspirationForm = ({ productId }) => {

    return (

            <Box
                minH='100vh'
                py={{ base: 6, lg: 24 }}
                px={{ base: 8, lg: 0 }}
            >
                <Box
                    mx='auto'
                    w={{ base: 'full', lg: '3xl' }}
                >

                    {/* Maintenant si vous le souhaitez, nous aimerions que vous partagiez le résultat de votre réalisation. Quelques photos, un commentaire et le lien votre compte Instagram ou votre blog. */}
                    {/* Il pourra donner des idées aux autre couturières et transmettre votre inspiration. */}
                    <Form />
                </Box>
            </Box>

    )
}

export default InspirationForm