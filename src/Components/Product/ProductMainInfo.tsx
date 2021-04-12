import React, { FunctionComponent } from 'react'

type props = {
    data: Object
}

import {
    Button,
    Box,
    Heading,
    VStack,
    Stack,
    Flex,
    Text,
    HStack
} from '@chakra-ui/react'
import RichContent from '../RichContent'

const ProductMainInfo: FunctionComponent<props> = ({ data }) => {
    return (
        <Stack
            spacing={4}
        >
            <Box>
                <Heading>
                    {data.title}
                </Heading>
            </Box>

            <Box>
                Évaluation : { data.level }/5
            </Box>

            <Box>
                Taille : 36/44
            </Box>

            <Box>
                Prix : { data.price }€
            </Box>

            <HStack>
                <Box
                    bg='#88a7aa'
                    color='white'
                    borderRadius='sm'
                    textTransform='uppercase'
                    letterSpacing='widest'
                    px={6}
                    py={3}
                    fontSize={{ base:'xs', lg:'normal'}}
                    _hover={{
                        bg:'#75b5bb'
                    }}
                >
                    Je le veux
                </Box>
                <Box
                    bg='#88a7aa'
                    color='white'
                    borderRadius='sm'
                    textTransform='uppercase'
                    letterSpacing='widest'
                    px={6}
                    py={3}
                    fontSize={{ base:'xs', lg:'normal'}}
                    _hover={{
                        bg:'#75b5bb'
                    }}
                >
                    Ajouter à ma liste
                </Box>
            </HStack>

            <RichContent data={data.intro} />
            <Text>Détail des mesures, inspirations, accédez à tous les détails de ce patron.</Text>
            <HStack>
                <Button as='a' href='#details' size="sm">Détails</Button>
                <Button as='a' href='#details' size="sm">Inspirations</Button>
                <Button as='a' href='#details' size="sm">Avis / Conseils</Button>
            </HStack>
        </Stack>
    )
}

export default ProductMainInfo