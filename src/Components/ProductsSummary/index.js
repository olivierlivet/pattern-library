import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import {
    Box,
    Heading,
    Stack
} from '@chakra-ui/react'
const ProductsSummary = ({ data }) => {
    return (
        <Box>
            <Heading as='h4' fontSize='xl'>
                Tous les produits de la catégorie
            </Heading>
            {/* <pre>
                { JSON.stringify( data, null, 1)}
            </pre> */}
            <Stack isInline>
                {data.map(product =>
                    <Box
                        key={`${product.node.slug}`}
                        as={ GatsbyLink }
                        to={ `/fr${product.node.slug}` }
                        p={ 10 }
                        border='solid 1px'
                        borderColor='gray.100'
                    >
                        {product.node.title}
                    </Box>
                )}
            </Stack>
        </Box>
    )
}

export default ProductsSummary