import React from 'react'

import {
    Box,
    Button,
    Stack,
    Text
} from '@chakra-ui/react'

const QuestionIntroduction = ({ id, index, setStep }) => {
    return (
        <Stack spacing={{ base:4, lg: 6 }}>
            <Text>
                Quelle joie, l'offre de patrons s'enrichie au fil des saisons ! Mais il n'est pas toujours facile de trouver le patron qui correspond parfaitement à son envie, sa morphologie, le coupon que l'on a au fond du placard ou son niveau.
            </Text>
            <Text>
                The Patterns Corner vous propose de partager un avis sincère, enrichissant pour les couturières et pour les éditrices, en 3 minutes !
            </Text>
            <Text>
                Merci
            </Text>
            <Box>
                <Button onClick={() => setStep()}>✂️{' '}On commence ?</Button>
            </Box>
        </Stack>
    )
}

export default QuestionIntroduction