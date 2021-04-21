import { Button, ButtonGroup, Stack, Textarea, FormControl, FormLabel, FormHelperText } from '@chakra-ui/react'
import React, { useState } from 'react'

import { Formik, Form, Field, ErrorMessage } from 'formik';


const QuestionProductCustomisation = ({ id, index, setStep, setFieldValue }) => {
    const [showDetails, setShowDetails] = useState(false)
    return (
        <Stack>
            { !showDetails ?
            <>
                    <Button
                        whiteSpace='pre-wrap'
                        h='auto'
                        p={2}
                        onClick={
                            () =>{
                                setFieldValue('ProductCustomisation', false);
                                setStep();
                            }
                        }
                        >Non, j'ai suivi les instructions à la lettre.</Button>
                    <Button
                        whiteSpace='pre-wrap'
                        h='auto'
                        p={2}
                        onClick={
                            () =>{
                                setFieldValue('ProductCustomisation', true);
                                setShowDetails(true);

                            }
                        }
                        >Oui, j'ai apporté ma petite touche personnelle. </Button>
                </ >
            :
                <>
                    <Field name='ProductCustomisationDetails'>
                        {({ field, form }) => (
                            <FormControl>
                                <FormLabel>Qu'avez-vous personnalisé ?</FormLabel>
                                <Textarea {...field} id='ProductCustomisationDetails' />
                                <FormHelperText>Cela pourrait donner des idées à d'autres couturières.</FormHelperText>
                            </FormControl>
                        )}
                    </Field>
                    <Button onClick={() => setStep()}>Valider</Button>

                </>


            }
        </Stack >
    )
}

export default QuestionProductCustomisation