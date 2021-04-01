import React, { FunctionComponent } from 'react'

type props = {
    data: Object
}

import { 
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
            gap={ 5 }
        >
            <Box>
                <VStack>
                <Box bg='gray.200' w='100px' h='100px'></Box>
                <Box bg='gray.200' w='100px' h='100px'></Box>
                <Box bg='gray.200' w='100px' h='100px'></Box>
                <Box bg='gray.200' w='100px' h='100px'></Box>
                <Box bg='gray.200' w='100px' h='100px'></Box>
                </VStack>
            </Box>
            <Center
                bg='green.50'
            >
                <img
                    src={`https://cdn3.rascol.com/77963/465x465/patron-de-robe-mademoiselle-josephine-p-m-patterns.jpg`}
                    alt={data.title}
                />
            </Center>


        </Grid>
    )
}

export default ProductIllustration