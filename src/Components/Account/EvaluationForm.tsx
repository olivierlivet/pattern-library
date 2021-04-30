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
import Form from '../Evaluation/Form'
const EvaluationForm = ({ productId }) => {

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
                    <Form productId={ productId } />
                </Box>
            </Box>

    )
}

export default EvaluationForm