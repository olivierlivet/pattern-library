import { Center, Text } from '@chakra-ui/react'
import React from 'react'

const ProductsCountIndicator = ({ count }) => {
    return (

        <Center p={0}>
            <Text fontSize='15px' letterSpacing='wide' display={{ base: 'block', lg: 'none' }}>
                <Text as='span' fontWeight='bold' borderBottom="solid 3px" borderBottomColor='green.300'>
                    {count}
                </Text>
                {count === 1 ? ` patron` : ` patrons`}
            </Text>
            <Text fontSize='15px' letterSpacing='wide' display={{ base: 'none', lg: 'block' }}>
                <Text as='span' fontWeight='bold' borderBottom="solid 3px" borderBottomColor='green.300'>
                    {count}
                </Text>
                {count === 1 ? ` patron correspond à votre recherche` : ` patrons correspondent à votre recherche`}
            </Text>
        </Center>
    )
}

export default ProductsCountIndicator