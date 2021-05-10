import {
    Box,
    Button,
    Link,
    Text
} from '@chakra-ui/react'
import { navigate } from 'gatsby-link'
import React, { FC } from 'react'

type props = {
    value: Number,
    backendDocumentId: String
}

const Rating: FC<props> = ({
    value,
    backendDocumentId
}) => {
    return (
        <Box>
            Évaluation ThePatternsCorner : ⭐ 4.8/5.
            {' '}
            (<Link
                textDecor='underline'
                color='gray.500'
                onClick={() => navigate(`/fr/contribution/evaluation/${backendDocumentId}`)}
            >Vous aussi, donnez votre avis.</Link>)
        </Box>
    )
}

export default Rating