import { Box, Link } from '@chakra-ui/layout'
import axios from 'axios';
import React, { FC, useEffect, useState } from 'react'
import { config } from '../../config';

import {
    Button,
    Heading,
    Flex,
    Stack,
    Text
} from '@chakra-ui/react'

import StatsSlider from './Stats/Slider';
import BarLinear from './Stats/BarLinear';
import { navigate } from 'gatsby-link';

type props = {
    backendDocumentId: string
}

const ProductStats: FC<props> = ({ backendDocumentId }) => {

    const [data, setData] = useState();
    useEffect(async () => {
        const result = await axios.get(
            `${config.apiUrl}/evaluation/product/${backendDocumentId}`
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
            fontSize={{ base: 'xs', lg: 'sm' }}
            letterSpacing='wide'
        >{children}</Heading>
    )

    const DetailButton = ({ children }) => (
        <Button
            h='auto'
            fontWeight='normal'
            p={0}
            variant='link'
            fontSize={{ base: 'xs', lg: 'sm' }}

        >
            { children}</Button>
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

            <Text
                fontSize='sm'
            >
                Vous avez cousu ce patron ?{' '}
                <Text
                    cursor='pointer'
                    as='span'
                    textDecor='underline'
                    color='gray.500'
                    onClick={() => navigate(`/fr/contribution/evaluation/${backendDocumentId}`)}
                >
                    Partagez votre avis avec la communeauté →
                </Text>
            </Text>


        </Stack>
    )
}

export default ProductStats