import React, { useState } from 'react'

import { Box, Button, Center, Flex, Stack, Text, Textarea } from '@chakra-ui/react'

import { Field } from 'formik'
import { Input } from '@chakra-ui/input'
import { FormControl, FormHelperText, FormLabel } from '@chakra-ui/form-control'
import ReactSlider from 'react-slider'
import { ArrowForwardIcon } from '@chakra-ui/icons'

const QuestionCuttingSatisfaction = ({ id, index, setStep, setFieldValue }) => {
    const [showDetails, setShowDetails] = useState(false)
    const [showValidate, setShowValidate] = useState(false)

    return (
        <Stack>
            <>
                <Flex
                    justifyContent='space-between'
                >
                    <Text fontSize='small' textAlign='left' w='30%'>
                        Pas tout à fait.
                </Text>
                    <Text fontSize='small' textAlign='right' w='30%'>
                        Oui, totalement&nbsp;!
                </Text>

                </Flex>
                <Center
                    py={8}
                >
                    <Box w='100%'>
                        <ReactSlider
                            defaultValue={ 50 }
                            renderThumb={(props, state) =>
                                <Center
                                    bg='white'
                                    borderRadius='full'
                                    fontSize='3xl'
                                    w='50px'
                                    h='50px'
                                    transform='translateY(-20px)'
                                    boxShadow='xl'
                                    border='solid 1px'
                                    borderColor='gray.200'
                                    cursor='pointer'
                                    _active={{
                                        border: 'none',
                                        outline: 'none',
                                        bg: 'gray.100'
                                    }}
                                    _hover={{
                                        border: 'none',
                                        outline: 'none',
                                        bg: 'gray.100'
                                    }}
                                    _focus={{
                                        border: 'none',
                                        outline: 'none',
                                        bg: 'gray.100'
                                    }}
                                    {...props}
                                >
                                    {/* {state.valueNow < 50 ? '👩‍💻' : '💃'} */}
                                    {
                                        state.valueNow < 50
                                            ? ' 😕'
                                            // : state.valueNow < 50 ? '🙄'
                                            : state.valueNow < 80 ? '🙂'
                                                : state.valueNow < 90 ? '😃'
                                                    : state.valueNow < 90 ? '😃'
                                                        : '😍'


                                    }
                                </Center>}
                            renderTrack={(props, state) =>
                                <Box
                                    h='10px'
                                    bgGradient="linear(to-r, green.200, green.300)"
                                    borderRadius='3px'
                                    {...props}
                                />
                            }
                            onAfterChange={(props, state) => {
                                setFieldValue('CuttingSatisfaction', props);
                                setShowDetails(props < 50);
                                setShowValidate(true)

                            }}
                        />
                    </Box>
                </Center>
            </>

            {showDetails && showValidate ?

                <>
                    <Field name='CuttingSatisfactionDetail'>

                        {({ field, form }) => (
                            <FormControl>
                                <FormLabel>Quelles améliorations suggérez-vous ?</FormLabel>
                                <Textarea {...field} id='NoticeComprehensibilityDetail' placeholder='Un autre ...' />
                                <FormHelperText>Cette information peut-être très utile à l'éditeur pour des optimisations futures.</FormHelperText>
                            </FormControl>
                        )}

                    </Field>
                    <Button
                        onClick={() => setStep()}
                    >Valider</Button>
                </>
                : showValidate ?
                    <Center pt={4} display={showValidate ? 'flex' : 'none'} >
                        <Button variant='link' onClick={() => setStep()}>Valider <ArrowForwardIcon /></Button>
                    </Center>
                : null}
        </Stack >
    )
}

export default QuestionCuttingSatisfaction