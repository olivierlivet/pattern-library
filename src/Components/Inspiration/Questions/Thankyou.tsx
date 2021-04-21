import React from 'react'

import {
    Box,
    Button,
    Stack,
    Link,
    Text
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { navigate } from 'gatsby-link'

const Thankyou = ({ id, index, setStep }) => {
    return (
        <Stack spacing={{ base:4, lg: 6 }}>
           <Text>Un très grand merci, blablabla</Text>
           <Text>Les plus belles réalisation seront partagées sur le compte @machin, pensez à vous abonner !</Text>
           <Link as='a' href='https://www.instagram.com/the.patterns.corner'>Instagrame TPC</Link>
            <Box>
                <Button
                    onClick={() => navigate('/fr')}
                >
                    Retour à l'accueil  <ArrowForwardIcon />
                </Button>
            </Box>
        </Stack>
    )
}

export default Thankyou


