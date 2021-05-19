import { Box, Link } from '@chakra-ui/layout'
import axios from 'axios';
import React, { FC, useEffect, useState } from 'react'
import { config } from '../../../config';

import {
    Button,
    Heading,
    Flex,
    Stack,
    Text
} from '@chakra-ui/react'

import StatsSlider from './Slider';
import BarLinear from './BarLinear';
import { navigate } from 'gatsby-link';
import { string } from 'yup/lib/locale';
import Stat from './Stat';

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
        console.log( result.data )
    }, []);

    const Title:FC<{ children: any}> = ({ children }) => (
        <Heading
            as='h2'
            color='gray.400'
            fontFamily='DM Sans'
            textTransform='uppercase'
            // fontWeight='normal'
            fontSize={{ base: 'xs', lg: 'sm' }}
            letterSpacing='wide'
        >{children}</Heading>
    )

    const DetailButton:FC<{ children: string, onClick:Function}> = ({onClick, children }) => (
        <Button
            onClick={()=> onClick() }
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
            {data && data.stats && data.stats.length ?
                <>
                    { data.stats[0].noticeComprehensibility ? 
                    <Stat
                        title={ `Clareté de la notice : ${data.stats[0].noticeComprehensibility}%`}
                        evaluatedValue={data.stats[0].noticeComprehensibility}
                        detailsData = { data.noticeComprehensibilityDetails }
                        contentKey='noticeComprehensibilityDetail'

                    />
                    : null }
                    { data.stats[0].cuttingSatisfaction ? 
                    <Stat
                        title={ `Satisfaction de la coupe : ${data.stats[0].cuttingSatisfaction}%`}
                        evaluatedValue={data.stats[0].cuttingSatisfaction}
                        detailsData = { data.cuttingSatisfactionDetails }
                        contentKey='cuttingSatisfactionDetail'

                    />
                    : null }

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