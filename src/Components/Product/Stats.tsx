import { Box } from '@chakra-ui/layout'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { config } from '../../config';

import {
    Button,
    Heading,
    Flex,
    Stack,
} from '@chakra-ui/react'

import StatsSlider from './Stats/Slider';
import BarLinear from './Stats/BarLinear';

const ProductStats = () => {

    const [data, setData] = useState();
    useEffect(async () => {
        const result = await axios.get(
            `${config.apiUrl}/evaluation/product/609a85066506111c3f601221`
        );
        setData(result.data);
    }, []);

    const Title = ({ children }) => (
        <Heading
            as='h4'
            color='gray.400'
            fontFamily='DM Sans'
            textTransform='uppercase'
            // fontWeight='normal'
            fontSize={{ base:'xs', lg:'sm' }}
            letterSpacing='wide'
        >{children}</Heading>
    )

    const DetailButton = ({ children }) => (
        <Button
            h='auto'
            fontWeight='normal'
            p={0}
            variant='link'
            fontSize={{ base:'xs', lg:'sm' }}

        >
            { children }</Button>
    )

    return (
        <Stack spacing={10} >
            {data ?
            <>
                    <Box>
                        <Flex mb={3} justify='space-between'>
                            <Title>Clareté des indications : {data.stats[0].NoticeComprehensibility}%</Title>
                            <DetailButton>Détails</DetailButton>
                        </Flex>
                        <BarLinear value={data.stats[0].NoticeComprehensibility} />
                    </Box>
                    <Box>
                    <Flex mb={3} justify='space-between'>
                        <Title>Satisfaction de la coupe : {data.stats[0].CuttingSatisfaction}%</Title>
                        <DetailButton>Détails</DetailButton>
                    </Flex>
                    <BarLinear value={data.stats[0].CuttingSatisfaction} />
                </Box>
                </>
                : null}
        </Stack>
    )
}

export default ProductStats