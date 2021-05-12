import React from 'react'
import {
    Box,
    Button,
    Text,
    Input,
    InputGroup,
    InputRightAddon,
    FormControl,
    FormErrorMessage
} from '@chakra-ui/react'

import { Field } from 'formik'

const QuestionSizeAndFabricLength = ({ id, index, setStep, values, data, errors }) => {
    return (
        <>
            <Text
                lineHeight='40px'
                fontSize='16px'
            >
                J'ai cousu{' '}
                {data.title}
                {' '}en taille{' '}
                <Box
                    display='inline-block'
                >
                    <Field name='size'>
                        {({ form, field }) => (
                            <FormControl isInvalid={form.errors.size && form.touched.size}>
                                <InputGroup size="sm" w='60px'>
                                    <Input {...field} lineHeight='20px' textAlign='center' fontSize='16px' type='number' pattern="[0-9]*" min='20' placeholder="40" />
                                    {/* <InputRightAddon children="cm" /> */}
                                </InputGroup>
                            </FormControl>

                        )}
                    </Field>
                </Box>
                {' '} et j'ai utilisé{' '}
                <Box
                    display='inline-block'
                >
                    <Field name='fabricLength'>
                        {({ form, field }) => (
                            <FormControl isInvalid={form.errors.fabricLength && form.touched.fabricLength}>
                                <InputGroup size="sm" w='100px'>
                                    <Input {...field} lineHeight='20px' type='number' fontSize='16px' pattern="[0-9]*" min='20' placeholder="100" />
                                    <InputRightAddon children="cm" />
                                </InputGroup>
                            </FormControl>
                        )}
                    </Field>
                </Box>
                {' '}de tissu.
            </Text>
            <FormControl isInvalid={ errors.size || errors.fabricLength }>
                <FormErrorMessage>{errors.fabricLength}</FormErrorMessage>
                <FormErrorMessage>{errors.size}</FormErrorMessage>
            </FormControl>
            {
                !values.size && !values.fabricLength ?
                    <Box mt={4}>
                        <Text>Ou alors,  <Button size='sm' variant='link' onClick={() => setStep(3)}>je ne sais pas</Button></Text>
                    </Box>
                : !errors.size && !errors.fabricLength ?
                    <Box mt={4}>
                        <Button
                        onClick={() => setStep(3)}>Valider</Button>
                    </Box>
                : null
            }

        </>
    )
}

export default QuestionSizeAndFabricLength