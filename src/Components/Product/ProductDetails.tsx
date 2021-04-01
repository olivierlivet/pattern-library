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
        <SimpleGrid
            columns={{
                base:1,
                lg:3
            }}
            gap={{
                base: 0,
                lg: 4
            }}
        >
            <Box>
                <Text>Mesures</Text>
                <Box
                    h={'90px'}
                    bg='gray.100'
                >   
                    Content
                </Box>
            </Box>
            <Box>
                <Text>Fournitures</Text>
                <Box
                    h={'90px'}
                    bg='gray.100'
                >   
                    Content
                </Box>
            </Box>
            <Box>
                <Text>Choix de tissu</Text>
                <Box
                    h={'90px'}
                    bg='gray.100'
                >   
                    Content
                </Box>
            </Box>
        </SimpleGrid>
    )
}

export default ProductsDetails