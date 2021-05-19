import { Box, Stack } from '@chakra-ui/layout'
import React, { FC, useState } from 'react'

import {
    Button,
    Heading,
    Flex,
} from '@chakra-ui/react'

import BarLinear from './BarLinear';

interface props {
    title: string;
    evaluatedValue: number;
    contentKey: string;
    detailsData: [any]
}

const Stat: FC<props> = ({
    title,
    evaluatedValue,
    detailsData,
    contentKey
}) => {

    const [showDetails, setShowDetails] = useState<boolean>(false)

    const Title: FC<{ children: any }> = ({ children }) => (
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

    const DetailButton: FC<{ children: string }> = ({ children }) => (
        <Button
            onClick={() => setShowDetails(!showDetails)}
            h='auto'
            fontWeight='normal'
            p={0}
            variant='link'
            fontSize={{ base: 'xs', lg: 'sm' }}

        >
            { children}</Button>
    )


    return (

        <Box>
            <Flex mb={3} justify='space-between'>
                <Title>{title}</Title>
                {detailsData ?
                    <DetailButton
                    >{!showDetails ? `Détails` : `Masquer les détails`}</DetailButton>
                    : null}
            </Flex>

            <BarLinear value={evaluatedValue} />
            { showDetails && detailsData ?
                <Stack spacing={2} mt={4}>
                    {/* <pre>
                     {JSON.stringify( detailsData, null, 1 )}
                </pre> */}
                    {detailsData.map(item =>
                        <Box>
                            <Box bg='white' color='gray.400' borderRadius='lg' p={4}>
                                {item[contentKey]}
                            </Box>
                            <Box pr={1} pt={1} fontSize='xs' color='gray.500'>{item.user.firstName}</Box>
                        </Box>
                    )}
                </Stack>
                : null}
        </Box>

    )
}

export default Stat