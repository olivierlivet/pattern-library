import React, { FunctionComponent } from 'react'
import ProductIllustrationWithSwipe from './ProductIllustrationWithSwipe'

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
        <Box
            position='relative'
            bg='gray.100'
            w='100%'
            h={{ base:'auto', lg:'600px' }}
        >
            <ProductIllustrationWithSwipe
                alt={ data.title }
                imagesUrl={ data.pictures ? data.pictures.url : data.fields.pictures ? data.fields.pictures.url : null }
            />

        </Box>
    )
}

export default ProductIllustration