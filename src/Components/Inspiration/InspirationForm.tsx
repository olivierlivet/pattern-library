import React, { useEffect, useState } from 'react'
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
import axios from 'axios';
import { config } from '../../config';
const InspirationForm = ({ productId }) => {

    const [data, setData] = useState();
    useEffect(async () => {
        const result = await axios.get(
            `${config.apiUrl}/product/${productId}`
        );
        setData(result.data);
    }, []);

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
                    {data ? 
                        <Form productId={productId} data={data} />
                    : null}
                </Box>
            </Box>

    )
}

export default InspirationForm