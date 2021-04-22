import React from 'react'
import {
    Box,
    Button,
    Text,
    Input,
    InputGroup,
    InputRightAddon
} from '@chakra-ui/react'

import { Field } from 'formik'

const QuestionSizeAndFabricLength = ({ id, index, setStep, values }) => {
    return (
        <>
            <Text
                lineHeight='40px'
                fontSize='16px'
            >
                J'ai cousu
                {` la Jupe Rita `}
                en taille{' '}
                <Box
                    display='inline-block'
                >
                    <Field name='size'>
                        {({ props, field }) => (
                            <InputGroup size="sm" w='60px'>
                                <Input {...field} lineHeight='20px' textAlign='center' fontSize='16px' type='number' pattern="[0-9]*" min='20' placeholder="40" />
                                {/* <InputRightAddon children="cm" /> */}
                            </InputGroup>
                        )}
                    </Field>
                </Box>
                {' '} et j'ai utilisé{' '}
                <Box
                    display='inline-block'
                >
                    <Field name='fabricLength'>
                        {({ props, field }) => (
                            <InputGroup size="sm" w='100px'>
                                <Input {...field} lineHeight='20px' type='number' fontSize='16px' pattern="[0-9]*" min='20' placeholder="100" />
                                <InputRightAddon children="cm" />
                            </InputGroup>
                        )}
                    </Field>
                </Box>
                {' '}de tissu.
            </Text>
            {
                !values.size && !values.fabricLength ? 
            <Box mt={4}>
                <Text>Ou alors,  <Button size='sm' variant='link' onClick={() => setStep(3)}>je ne sais pas</Button></Text>
            </Box>
            : 
            <Box mt={4}>
                <Button onClick={() => setStep(3)}>Valider</Button>
            </Box>
        }

        </>
    )
}

export default QuestionSizeAndFabricLength