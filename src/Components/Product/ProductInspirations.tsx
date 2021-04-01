import React, { FunctionComponent } from 'react'

type props = {
    data: Object
}

import { 
    Box,
    SimpleGrid,
    Text
} from '@chakra-ui/react'

const ProductsDetails:FunctionComponent<props> = ({ data }) => {
    return(
        <Box p={ 10 }>
            Liste d'inspirations
        </Box>
    )
}

export default ProductsDetails