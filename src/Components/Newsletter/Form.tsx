import React from 'react'

import { Formik, Form, Field } from 'formik';
import {
    Button,
    Input,
    FormControl,
    FormHelperText,
    FormLabel,
    Stack
} from '@chakra-ui/react';


const NewsletterForm = ({ }) => {
    return (
        <Formik
            initialValues={
                {
                    // NoticeComprehensibility: '',
                    // NoticeComprehensibilityDetail: '',
                    // ProductCustomisation: '',
                }
            }
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
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
                    {({ props, field }) => (
                            <FormControl maxW='100%'>
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
    )
}

export default NewsletterForm