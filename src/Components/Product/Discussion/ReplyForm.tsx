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
                discussion: discussionId,
                content: ''
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                console.log( 'onSubmit' )
                setSubmitting(true);
                axios.post(
                    `${config.apiUrl}/discussion/${discussionId}/message`,
                    {
                        ...values
                    }
                ).then((response) =>{
                    onMessagePosted();
                    resetForm( {values: {
                        content:'',
                        user: authenticationService.getUser().userId,
                        discussion: discussionId
                    }} )
                })
            }}
            validationSchema={
                yup.object().shape({
                    content: yup.string(),
                })
            }
        >
            {({
                isSubmitting,
                errors
            }) => (
                <Form>
                    <Stack
                        spacing={2}
                        mt={5}
                        ml='50'
                        px={5}
                    >   
                        <Field name='content'>
                            {({ field, form }) => (
                                <Box>
                                    <FormControl isInvalid={form.errors.content}>
                                        <Textarea {...field} placeholder='Participez à la discussion' />
                                        <FormErrorMessage>Attention, ce champs n'est pas correct</FormErrorMessage>
                                    </FormControl>
                                </Box>
                            )}
                        </Field>
                        <Box>
                            <Button
                                type='submit'
                                size='sm'
                                isActive={ !errors }
                                isLoading={ isSubmitting}
                            >
                                Publier votre message
                            </Button>
                        </Box>
                    </Stack>
                </Form>
            )}
        </Formik>
    )
}

export default ReplyForm