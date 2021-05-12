import {
    Box,
    Button,
    Link,
    Text,
    Tooltip
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
            <Link
                fontSize='sm'
                textDecor='underline'
                color='gray.500'
                onClick={() => navigate(`/fr/contribution/evaluation/${backendDocumentId}`)}
            >
                (vous aussi,{' '}
                <Tooltip label="Et gagnez des réductions sur vos patrons..." aria-label="Détail programme fidelité">
                    donnez votre avis)
                </Tooltip>
            </Link>
        </Box>
    )
}

export default Rating