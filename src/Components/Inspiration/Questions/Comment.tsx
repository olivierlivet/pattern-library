import React from 'react'

import {
    Box,
    Button,
    Stack,
    Text
} from '@chakra-ui/react'

const Comment = ({ id, index, setStep }) => {
    return (
        <Stack spacing={{ base:4, lg: 6 }}>
           <Text>
            Dites-nous librement quel était votre état d'esprit, votre motivation à réaliser ce patron. Une occasion particulière, combler un manque dans votre garde robe. Avez-vous hésité avec un autre modèle ?
            </Text>
            <Text>
                Tout simplement, qu'est ce que vous a convaincu à coudre <strong>ce patron</strong>.
            </Text>
            <Box>
                Module wysiwyg
            </Box>
            <Box>
                <Button onClick={() => setStep()}>✂️{' '}Suivant ?</Button>
            </Box>
        </Stack>
    )
}

export default Comment


