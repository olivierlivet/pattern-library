import React, { useEffect, useState } from 'react'

import {
    Box,

} from '@chakra-ui/react'

import Form from '../Evaluation/Form'
import { config } from '../../config';
import axios from 'axios';
const EvaluationForm = ({ productId }) => {

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
                { data ?
                    <Form data={ data } />
                : null }
            </Box>
        </Box>
    )
}

export default EvaluationForm