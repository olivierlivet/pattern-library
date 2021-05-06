import React from 'react'

import {
    Box,
    Button,
    Stack,
    Text
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

const QuestionIntroduction = ({ id, index, setStep, data }) => {
    return (
        <Stack spacing={{ base: 4, lg: 5 }}>
            <Text>
            Votre contribution permettra à d'autres couturières de trouver plus facilement le patron qui correspond à leur projet et sera d'une aide précieuse pour la créatrice.
            </Text>
            <Text>Et pour vous remercier, 1 avis = 10% de réduction sur votre prochaine commande sur The Patterns Corner.
            </Text>

            <Box>
                <Button onClick={() => setStep()}>Parlons couture <ArrowForwardIcon ml={ 2 } /></Button>
            </Box>
        </Stack>
    )
}

export default QuestionIntroduction