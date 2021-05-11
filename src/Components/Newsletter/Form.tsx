import React, { useState } from 'react'

import { Formik, Form, Field } from 'formik';
import {
    Button,
    Input,
    FormControl,
    FormHelperText,
    FormLabel,
    Stack,
    Text
} from '@chakra-ui/react';
import axios from 'axios';
import { config } from '../../config';
import * as yup from 'yup';


const NewsletterForm = ({ }) => {

    const [isSubmited, setIsSubmited] = useState( false )
    return (
        !isSubmited ?
        <Formik
            initialValues={
                {
                    source:'newsletter'
                }
            }
            validationSchema={ yup.object().shape({
                email: yup.string().email('Le format semble erronée').required('')
            })}
            onSubmit={(values, { setSubmitting }) => {
                axios.post(
                    `${config.apiUrl}/user/email`, values
                )
                setIsSubmited( true )
            }}
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
                setFieldTouched
                /* and other goodies */
            }) => (
                <Form>
                    <Field name="email">
                    {({ form, field }) => (
                            <FormControl 
                                isInvalid={ form.errors.email && form.touched.email }
                                maxW='100%'
                            >
                                <FormLabel>
                                    Pour recevoir nos bons plans, les infos sur les derniers patrons et des inspirations, il suffit de laisser votre adresse mail.
                                </FormLabel>
                                <Stack direction="row" spacing={4}>
                                    <Input
                                        {...field}
                                        variant='flushed'
                                        type='email'
                                        placeholder='votre@email.fr'
                                        // w={{ base: 'full', lg:'auto'}}
                                    />
                                    <Button
                                        type='submit'
                                        minW='120px'
                                        variant='outline'
                                        colorScheme='black'
                                        isDisabled={isSubmitting}
                                    >
                                        Je m'abonne
                                    </Button>
                                </Stack>
                                <FormHelperText color='gray.200'>Votre email est conservée de façon très sécurisée et la désinscription est facile</FormHelperText>
                            </FormControl>
                        )}

                    </Field>
                    {/* <pre>
                        { JSON.stringify( values, null, 1)}
                    </pre> */}
                </Form>
            )}
        </Formik>
        :
        <Text>Votre abonnement à la lettre d'information a bien été enregistré ! bienvenue !</Text>
    )
}

export default NewsletterForm