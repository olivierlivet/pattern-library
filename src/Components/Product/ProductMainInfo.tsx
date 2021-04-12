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
    HStack,
    SimpleGrid,
    Center
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
            <SimpleGrid
                columns={3}
                gap={4}
            >

            <Flex wrap='wrap'>
                <Text w='100%' color='gray.600' textTransform='uppercase' fontSize='13px' letterSpacing='wider'>Évaluation</Text>
                <Text w='100%'>4****</Text>
            </Flex>

            <Flex wrap='wrap'>
                <Text w='100%' color='gray.600' textTransform='uppercase' fontSize='13px' letterSpacing='wider'>Taille</Text>
                <Text w='100%'>36→44</Text>
            </Flex>

            <Flex wrap='wrap'>
                <Text w='100%' color='gray.600' textTransform='uppercase' fontSize='13px' letterSpacing='wider'>Prix</Text>
                <Text w='100%'>{ data.price }€</Text>
            </Flex>

            </SimpleGrid>

            

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
            <HStack>
                <Button as='a' href='#details' size="sm">Détails</Button>
                <Button as='a' href='#details' size="sm">Inspirations</Button>
                <Button as='a' href='#details' size="sm">Avis / Conseils</Button>
            </HStack>
        </Stack>
    )
}

export default ProductMainInfo