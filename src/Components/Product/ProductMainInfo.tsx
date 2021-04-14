import React, { FunctionComponent } from 'react'

type props = {
    data: Object
}

import {
    Button,
    Box,
    Heading,
    VStack,
    Link,
    Stack,
    Flex,
    Text,
    HStack,
    SimpleGrid,
    Center
} from '@chakra-ui/react'
import RichContent from '../RichContent'
import { StarIcon } from '@chakra-ui/icons'


const ProductMainInfo: FunctionComponent<props> = ({ data }) => {
    return (
        <Stack
            spacing={{ base: 4, lg: 6 }}
        >
            <Box>
                {/* <pre>
                    { JSON.stringify( data, null, 1 )}
                </pre> */}
                <Heading as='h1'>
                    {data.title}
                </Heading>
                <Link
                    color='gray.600'
                    borderBottom='solid 4px'
                    borderBottomColor='#f5d692'
                    display='inline-block'
                    h='22px'
                >
                    {data.editor ? data.editor.title : null}
                    {data.editor.fields ? data.editor.fields.title : null}
                </Link>
            </Box>
            <RichContent data={data.intro} />

            <HStack>
                <Box
                    bg='#88a7aa'
                    color='white'
                    border='solid 1px'
                    borderColor='#88a7aa'
                    borderRadius='sm'
                    textTransform='uppercase'
                    letterSpacing='widest'
                    px={6}
                    py={3}
                    fontSize={{ base: 'x-small', md: 'small', lg: 'normal' }}
                    _hover={{
                        bg: '#75b5bb'
                    }}
                >
                    Acheter
                </Box>
                <Box
                    border='solid 1px'
                    borderColor='#88a7aa'
                    color='#88a7aa'

                    borderRadius='sm'
                    textTransform='uppercase'
                    letterSpacing='widest'
                    px={6}
                    py={3}
                    fontSize={{ base: 'x-small', md: 'small', lg: 'normal' }}
                    _hover={{
                        bg: '#75b5bb',
                        color: 'white'
                    }}
                >
                    Ajouter à ma liste
                </Box>
            </HStack>
            <SimpleGrid
                columns={3}
                gap={4}
            >
                <Flex wrap='wrap'>
                    <Text w='100%' color='gray.600' textTransform='uppercase' fontSize='13px' letterSpacing='wider'>Évaluation</Text>
                    <Flex align='center'>
                        <Text w='100%' mr={2}>4/5</Text>
                        <StarIcon color='yellow.300' w={3} h={3} />
                        <StarIcon color='yellow.300' w={3} h={3} />
                        <StarIcon color='yellow.300' w={3} h={3} />
                        <StarIcon color='yellow.300' w={3} h={3} />
                    </Flex>
                </Flex>

                <Flex wrap='wrap'>
                    <Text w='100%' color='gray.600' textTransform='uppercase' fontSize='13px' letterSpacing='wider'>Taille</Text>
                    <Text w='100%'>36→44</Text>
                </Flex>

                <Flex wrap='wrap'>
                    <Text w='100%' color='gray.600' textTransform='uppercase' fontSize='13px' letterSpacing='wider'>Prix</Text>
                    <Text w='100%'>{data.price}
                        <Text as="sup">€</Text>
                    </Text>
                </Flex>
            </SimpleGrid>
            <HStack>
                <Button as='a' href='#details' size="sm">Détails</Button>
                <Button as='a' href='#details' size="sm">Inspirations</Button>
                <Button as='a' href='#details' size="sm">Avis / Conseils</Button>
            </HStack>

            <Box
                px={{ base: 0, lg: 0 }}
                fontSize='15px'
            >
                <RichContent data={data.description} />
            </Box>
        </Stack>
    )
}

export default ProductMainInfo