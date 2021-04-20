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
import Form from '../Contribution/Form'
const ContributionForm = ({ productId }) => {

    const [hasStarted, setHasStarted] = useState(false)
    return (
        !hasStarted ?
            // <AccountWrapper size='xl'>
            <Box
                h='80vh'
                py={{ base: 6, lg: 24 }}
                px={{ base: 8, lg: 0 }}
            >

                <Heading
                    fontSize={{ base: 'xl', lg: 'x-large' }}
                    fontWeight='normal'
                    textAlign='center'
                    py={{ base: 6, lg: 10 }}
                    px={{ base: 0, lg: 12 }}


                >
                    Partager votre expérience avec la communeauté des couturières 🧵

                     </Heading>

                <Stack
                    mx='auto'
                    spacing={{ base: 3, lg: 6 }}
                    bg='white'
                    w={{ base: 'full', lg: '3xl' }}
                    p={{ base: 6, lg: 26 }}
                    boxShadow='sm'
                    borderRadius={3}
                >



                    <Text>
                        Quelle joie, l'offre de patrons s'enrichie au fil des saisons ! Mais il n'est pas toujours facile de trouver le patron qui correspond parfaitement à son envie, sa morphologie, le coupon que l'on a au fond du placard ou son niveau.
                    </Text>
                    <Text>
                        The Patterns Corner vous propose de partager un avis sincère, enrichissant pour les couturières et pour les éditrices, en 3 minutes !
                    </Text>
                    <Text>
                        Merci
                    </Text>
                    <Box>
                        <Button onClick={() => setHasStarted(true)}>✂️{' '}On commence ?</Button>
                    </Box>
                </Stack>
            </Box>

            // </AccountWrapper>
            :
            <Box
                minH='100vh'
                py={{ base: 6, lg: 24 }}
                px={{ base: 8, lg: 0 }}
            >
                <Box
                    mx='auto'
                    w={{ base: 'full', lg: '3xl' }}
                >
                    <Form />
                </Box>
            </Box>



    )
}

export default ContributionForm