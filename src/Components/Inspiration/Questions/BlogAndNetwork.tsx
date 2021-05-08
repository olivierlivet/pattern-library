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
import { Field } from 'formik'

const BlogAndNetwork = ({ id, index, setStep }) => {
    return (
        <Stack spacing={{ base: 4, lg: 6 }}>
            Nous aimerions inviter les couturiètes qui auront aimé votre réalisation à vous suivre sur les réseaux. Indiquez la manière de vous suivre :
            <Field name='instagramAccount'>
                {({ field, form }) => (
                    <FormControl>
                        <FormLabel>
                            Un compte Instagram ?
                        </FormLabel>
                        <Input {...field} placeholder='@patternscorner' />
                        <FormHelperText>On mettra le lien de votre compte à la suite des photos de votre réalisation.</FormHelperText>
                    </FormControl>
                )}
            </Field>

            <Field name='blogUrl'>
                {({ field, form }) => (
                    <FormControl>
                        <FormLabel>
                            Un blog ?
                        </FormLabel>
                        <Input {...field} name='blogUrl' placeholder='https://mon-blog.com' />
                        <FormHelperText>Si vous en avez-un, sinon, pas d'importance !</FormHelperText>
                    </FormControl>
                )}
            </Field>
            <Box>
                <Button type="submit" onClick={()=>setStep()}>Valider</Button>
            </Box>
        </Stack>
    )
}

export default BlogAndNetwork


