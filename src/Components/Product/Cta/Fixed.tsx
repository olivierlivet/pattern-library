import { Box } from '@chakra-ui/layout'
import React, { FC } from 'react'
import BuyButton from '../BuyButton'

type props = {
    isVisible: boolean,
    productId: string,
    price: number
}

const FixedCta:FC <props> = ({
    isVisible,
    productId,
    price
}) => {
    return(
        <Box
            position='fixed'
            bottom='0'
            left='0'
            right='0'
            p={4}
            transition='transform 300ms ease-in-out'
            transform={ !isVisible ? 'translateY(100%)' : 'translate(0)' }
            bg='white'
        >
            <BuyButton
                product={ productId }
                price={ price }
            />
        </Box>
    )
}

export default FixedCta