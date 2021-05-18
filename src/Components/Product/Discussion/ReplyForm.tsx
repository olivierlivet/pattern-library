import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { config } from '../../../config'
import { authenticationService } from '../../..//Service/auth'
import { navigate } from '@reach/router'
import * as yup from 'yup';
import { Box, Stack } from '@chakra-ui/layout'
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Textarea } from '@chakra-ui/textarea'
import { Button } from '@chakra-ui/button'


const ReplyForm = ({ discussionId, onMessagePosted }) => {
    return (
        <Formik
            initialValues={{
                user: authenticationService.getUser().userId,
                discussion: discussionId
            }}
            onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true)
                console.log('submit evaluation', values)
                axios.post(
                    `${config.apiUrl}/discussion/${discussionId}/message`,
                    {
                        ...values
                    }
                ).then((response) => onMessagePosted())

            }}
            validationSchema={
                yup.object().shape({
                    size: yup.number().min(30, 'La taille doit être comprise entre 30 et 60').max(54, 'La taille doit être comprise entre 30 et 60').nullable(),
                    fabricLength: yup.number().min(20, 'La longueur de tissu est comprise entre 20cm et 400 cm').max(400, 'La longueur de tissu est comprise entre 20cm et 400 cm').nullable(),
                })
            }
        >
            {({
                values,
                initialValues,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                setFieldError,
                setFieldValue,
                setFieldTouched,
                /* and other goodies */
            }) => (
                <Form>
                    <Stack spacing={4}>
                       
                        <Field name='content'>
                            {({ field, form }) => (
                                <Box>
                                    <FormControl isInvalid={form.errors.content}>
                                        <FormLabel color='gray.500'>Votre réponse :</FormLabel>
                                        <Textarea {...field} variant='flushed' />
                                        <FormErrorMessage>Attention, ce champs n'est pas correct</FormErrorMessage>
                                    </FormControl>
                                </Box>
                            )}
                        </Field>
                        <Box>
                            <Button type='submit'>Envoyer</Button>
                        </Box>
                    </Stack>
                </Form>
            )}

        </Formik>
    )
}

export default ReplyForm