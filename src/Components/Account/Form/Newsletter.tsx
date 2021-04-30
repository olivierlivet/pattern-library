import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

import {
    Box,
    Button,
    Center,
    FormControl,
    FormLabel,
    Input,
    Link,
    Select,
    SimpleGrid,
    Stack,
    Text
} from '@chakra-ui/react'


import { Field, Form, Formik } from 'formik';
import { useToast } from "@chakra-ui/react"

const UserNewsletterForm = ({ }) => {
    const toast = useToast()

    const questions = [
        {
            name: 'password',
            label: 'Mot de passe',
            type: 'password'
        },
        {
            name: 'passwordConfirmation',
            label: 'Confirmation de mot de passe',
            type: 'password'
        },

    ]

    return (
        <Formik
            initialValues={{
                newsletter: false
            }}
            onSubmit={
                () =>
                    toast({
                        title: "Modification de votre abonnement enregistré !",
                        description: "Votre mot de passe a bien été modifié.",
                        status: "success",
                        duration: 5000,
                        isClosable: true,
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
                setFieldTouched
                /* and other goodies */
            }) => (
                <Stack
                    as={Form}
                    spacing={{ base:2, lg:4 }}
                >
                    
                    <Field name={'newsletterSubscription'}>
                        {({ field, form }) => (
                            <FormControl>
                                <Select {...field}>
                                    <option value={ true }>Oui je la veux</option>
                                    <option value={ false }>Non merci</option>
                                </Select>
                            </FormControl>
                        )}
                    </Field>

                    { values && touched ?
                        <Box>
                            <Button type='submit'>Enregistrer</Button>
                        </Box>
                    : null}


                    {/* <pre>
                        {JSON.stringify(values, null, 1)}
                    </pre> */}

                </Stack>
            )}

        </Formik>
    )
}
export default UserNewsletterForm