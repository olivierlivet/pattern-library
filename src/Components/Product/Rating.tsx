import { Box } from '@chakra-ui/react'
import React from 'react'

type props = {
    value: Number
}

const Rating = ({ 
    value
}) => {
    return(
        <Box>
            Évaluation ThePatternsCorner : ⭐ 4.8/5
        </Box>
    )
}

export default Rating