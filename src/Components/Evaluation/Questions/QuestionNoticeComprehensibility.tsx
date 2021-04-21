import { Button } from '@chakra-ui/button'
import { Stack } from '@chakra-ui/layout'
import { Textarea } from '@chakra-ui/textarea'
import React, { useState } from 'react'

import { Field } from 'formik'
import { Input } from '@chakra-ui/input'
import { FormControl, FormHelperText, FormLabel } from '@chakra-ui/form-control'

const QuestionNoticeComprehensibility = ({ id, index, setStep, setFieldValue, values }) => {
    const [showDetails, setShowDetails] = useState(false)
    return (
        <Stack>
            {!showDetails ?
                <>
                    <Button
                        whiteSpace='pre-wrap'
                        h='auto'
                        p={4}
                        onClick={() => {
                            setFieldValue('NoticeComprehensibility', 2);
                            setStep();
                        }}
                    >
                        Oui, top, il suffit de se laisser porter  !
                    </Button>
                    <Button
                        whiteSpace='pre-wrap'
                        h='auto'
                        p={4}
                        onClick={() => {
                            setFieldValue('NoticeComprehensibility', 1);
                            setStep();
                        }}
                    >
                        Ca va, après avoir relu certains passages plusieurs fois quand même
                    </Button>
                    <Button
                        whiteSpace='pre-wrap'
                        h='auto'
                        p={4}
                        onClick={() => {
                            setFieldValue('NoticeComprehensibility', 0);
                            setShowDetails(true);
                        }}
                    >
                        Bof, j'ai rencontré des difficultés  (si bof : champ ouvert pour détailler)
                    </Button>
                </>
            :
                <>
                    <Field name='NoticeComprehensibilityDetail'>

                        {({ field, form }) => (
                            <FormControl>
                                <FormLabel>Pouvez-vous précisez ce qui n'était pas clair ?</FormLabel>
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
        </Stack>
    )
}

export default QuestionNoticeComprehensibility