import React from 'react'

import {
    Box,
    Button,
    Stack,
    Text
} from '@chakra-ui/react'

const Introduction = ({ id, index, setStep }) => {
    return (
        <Stack spacing={{ base:4, lg: 4 }}>
            <Text>
                Votre avis 5 ⭐  sur Jupe Rita a bien été sauvegardé, merci beaucoup !
            </Text>
            <Text>
                Maintenant que nous connaissons votre sentiment sur ce patron en détail, on piaffe d'impatience de voir le résultat !
            </Text>
            <Text>
                Voulez-vous prendre encore 2 minutes pour partager quelques photos de votre réalisation et transmettre de l'inspiration aux autres couturières ? Merci d'avance !
            </Text>
            <Box>
                <Button onClick={() => setStep()}>On se lance ?</Button>
            </Box>
        </Stack>
    )
}

export default Introduction


