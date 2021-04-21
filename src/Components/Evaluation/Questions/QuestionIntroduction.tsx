import React from 'react'

import {
    Box,
    Button,
    Stack,
    Text
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

const QuestionIntroduction = ({ id, index, setStep }) => {
    return (
        <Stack spacing={{ base: 4, lg: 5 }}>
            <Text>
                La recherche du patron qui correspond parfaitement au projet auquel vous pensez depuis des semaines, à votre silhouette ou au coupon de tissu que vous avez au fond de votre placard peut s'apparenter à une véritable chasse au trésor.
            </Text>
            <Text>
                The Patterns Corner vous propose de partager votre avis sur le patron [nom du patron] de [marque de patron] pour éclairer les couturières dans leurs futures recherches et les créatrices dans leurs futurs projets.
            </Text>
            <Box>
                <Button onClick={() => setStep()}>Parlons couture <ArrowForwardIcon ml={ 2 } /></Button>
            </Box>
        </Stack>
    )
}

export default QuestionIntroduction