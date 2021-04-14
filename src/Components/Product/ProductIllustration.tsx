import React, { FunctionComponent } from 'react'

type props = {
    data: Object,
}

import { 
    Button,
    Box,
    Center,
    Grid,
    HStack,
    SimpleGrid,
    Text,
    VStack
} from '@chakra-ui/react'

const ProductIllustration:FunctionComponent<props> = ({ data }) => {
    return(
        <Grid
            templateColumns={{
                base:'100%',
                lg:'100px 1fr'
            }}
            gap={{ base: 0, lg:5 }}
        >
            <Center
                bg='green.50'
                order={{ base: 1, lg: 2 }}
            >
                <img
                    src={`https://cdn3.rascol.com/77963/465x465/patron-de-robe-mademoiselle-josephine-p-m-patterns.jpg`}
                    alt={data.title}
                />
            </Center>
            <Box
                order={{ base: 2, lg: 1 }}
                display={{ base: 'none', lg:'initial'}}
            >
                <VStack>
                <Box bg='gray.200' w='100px' h='100px'></Box>
                <Box bg='gray.200' w='100px' h='100px'></Box>
                <Box bg='gray.200' w='100px' h='100px'></Box>
                <Box bg='gray.200' w='100px' h='100px'></Box>
                </VStack>
            </Box>
        </Grid>
    )
}

export default ProductIllustration