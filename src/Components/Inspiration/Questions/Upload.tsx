import React from 'react'

import {
    Box,
    Button,
    Stack,
    Text
} from '@chakra-ui/react'

const Upload = ({ id, index, setStep }) => {
    return (
        <Box spacing={{ base:4, lg: 6 }}>
           Upload
            <Box>
                <Button onClick={() => setStep()}>✂️{' '}Suivant ?</Button>
            </Box>
        </Box>
    )
}

export default Upload


