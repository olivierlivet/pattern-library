import React from 'react'

import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
    Stack,
    Text
} from '@chakra-ui/react'

const BlogAndNetwork = ({ id, index, setStep }) => {
    return (
        <Stack spacing={{ base:4, lg: 6 }}>
            Nous aimerions inviter les couturiètes qui auront aimé votre réalisation à vous suivre sur les réseaux. Indiquez la manière de vous suivre :
            <FormControl>
                <FormLabel>
                    Un compte Instagram ?
                    <Input name='instagramAccount' placeholder='@patternscorner' />
                </FormLabel>
                <FormHelperText>On mettra le lien de votre compte à la suite des photos de votre réalisation.</FormHelperText>
            </FormControl>
            <FormControl>
                <FormLabel>
                    Un blog ?
                    <Input name='blogUrl' placeholder='https://mon-blog.com' />
                </FormLabel>
                <FormHelperText>Si vous en avez-un, sinon, pas d'importance !</FormHelperText>
            </FormControl>
            <Box>
                <Button onClick={() => setStep()}>Valider</Button>
            </Box>
        </Stack>
    )
}

export default BlogAndNetwork


