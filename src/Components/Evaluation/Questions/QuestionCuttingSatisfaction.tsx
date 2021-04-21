import { Button, ButtonGroup } from '@chakra-ui/button'
import { Box, HStack, Stack, VStack } from '@chakra-ui/layout'
import { Textarea } from '@chakra-ui/textarea'
import { Field } from 'formik'
import { Input } from '@chakra-ui/input'
import { FormControl, FormHelperText, FormLabel } from '@chakra-ui/form-control'
import React, { useState } from 'react'

const QuestionCuttingSatisfaction = ({ id, index, setStep, setFieldValue }) => {
    const [showDetails, setShowDetails] = useState(false)
    return (
        <Stack>
            { !showDetails ?
                <VStack>
                    <Button
                        whiteSpace='pre-wrap'
                        h='auto'
                        p={2}
                        w='full'
                        onClick={() =>{
                            setFieldValue('CuttingSatisfaction', true);
                            setStep();
                        }}
                    >
                        Oui, je me sens très à l'aise lorsque dans ce vêtement
                    </Button>
                    <Button
                        whiteSpace='pre-wrap'
                        h='auto'
                        p={2}
                        w='full'
                        onClick={() =>{
                            setFieldValue('CuttingSatisfaction', false);
                            setShowDetails(true);
                        }}                    >
                        Quelques modifications me semblent nécessaires pour en faire une pièce phare de mon dressing
                    </Button>
                </VStack>
                :
                <>
                    <Field name='CuttingSatisfactionDetail'>

                        {({ field, form }) => (
                            <FormControl>
                                <FormLabel>Dites nous lequelles ?</FormLabel>
                                <Textarea {...field} id='NoticeComprehensibilityDetail' placeholder='Un autre ...' />
                                <FormHelperText>Cette information peut-être très utile à l'éditeur pour des amélioratoin futures.</FormHelperText>
                            </FormControl>
                        )}

                    </Field>
                    <Button
                        onClick={() => setStep()}
                    >Valider</Button>
                </>
            }
        </Stack >
    )
}

export default QuestionCuttingSatisfaction