import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { config } from '../../../config'
import { authenticationService } from '../../../Service/auth'
import { navigate } from '@reach/router'
import * as yup from 'yup';
import { Box, Stack } from '@chakra-ui/layout'
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Textarea } from '@chakra-ui/textarea'
import { Button } from '@chakra-ui/button'


const CreateDiscussionForm = ({ data, onDiscussionPosted, productId }) => {
    return (
        <Formik
            initialValues={{
                user: authenticationService.getUser().userId,
                product: productId
            }}
            onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true)
                console.log('submit evaluation', values)
                axios.post(
                    `${config.apiUrl}/discussion/`,
                    {
                        ...values
                    }
                ).then((response) => onDiscussionPosted())

            }}
            validationSchema={
                yup.object().shape({
                    title: yup.string(),
                    content: yup.string(),
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
                isValid,
                setFieldError,
                setFieldValue,
                setFieldTouched,
                /* and other goodies */
            }) => (
                <Form>
                    <Stack spacing={4}>
                        <Field name='title'>
                            {({ field, form }) => (
                                <Box>
                                    <FormControl isInvalid={form.errors.title}>
                                        <FormLabel color='gray.500'>Titre :</FormLabel>
                                        <Input {...field} variant='flushed' type="text" />
                                        <FormErrorMessage>Attention, ce champs n'est pas correct</FormErrorMessage>
                                    </FormControl>
                                </Box>
                            )}
                        </Field>
                        <Field name='content'>
                            {({ field, form }) => (
                                <Box>
                                    <FormControl isInvalid={form.errors.title}>
                                        <FormLabel color='gray.500'>Détails :</FormLabel>
                                        <Textarea {...field} variant='flushed' />
                                        <FormErrorMessage>Attention, ce champs n'est pas correct</FormErrorMessage>
                                    </FormControl>
                                </Box>
                            )}
                        </Field>
                        <Box>
                            <Button
                                type='submit'
                                isLoading={ isSubmitting }
                                isActive={ !isValid }
                            >
                                Envoyer
                            </Button>
                            <pre>
                                { JSON.stringify (isValid , null, 1 )}
                            </pre>
                        </Box>
                    </Stack>
                </Form>
            )}

        </Formik>
    )
}

export default CreateDiscussionForm