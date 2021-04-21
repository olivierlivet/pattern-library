import React from 'react'

import {
    Box,
    Button,
    Stack,
    Link,
    Text,
    Flex
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { navigate } from 'gatsby-link'

const Thankyou = ({ id, index, setStep }) => {
    return (
        <Stack spacing={{ base:4, lg: 6 }}>
           <Text textAlign='center'>Un très grand merci, la communeauté des coutières sera plus riche de votre avis et de l'inspiration que pourra transmettre votre réalisation.</Text>
           <Text textAlign='center'>Les plus belles réalisation seront partagées sur le compte @the.patterns.corner, pensez à vous abonner !</Text>
           <Flex justify='center'>
                <Button
                    mx='auto'
                    as='a'
                    target='_blank'
                    href='https://www.instagram.com/the.patterns.corner'
                >
                    Instagram The Patterns Corner
                </Button>
            </Flex>
            <Flex justify='center'>
                <Button
                    onClick={() => navigate('/fr')}
                    size='sm'
                    variant='outline'
                >
                    Retour à l'accueil  <ArrowForwardIcon ml={2} />
                </Button>
            </Flex>
        </Stack>
    )
}

export default Thankyou


