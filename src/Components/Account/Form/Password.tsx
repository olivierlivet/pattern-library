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
    SimpleGrid,
    Stack,
    Text
} from '@chakra-ui/react'


import { Field, Form, Formik } from 'formik';
import { useToast } from "@chakra-ui/react"

const UserPasswordForm = ({ }) => {
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
                password: 'azeaeazeza'
            }}
            onSubmit={
                () =>
                    toast({
                        title: "Mot de passe modifié !",
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
                    <SimpleGrid
                        columns={{ base: 1, lg: 2 }}
                        gap={{ base: 4, lg: 8 }}
                    >
                        {questions.map(item =>
                            <Field name={item.name}>
                                {({ field, form }) => (
                                    <FormControl>
                                        <FormLabel>{item.label} :</FormLabel>
                                        <Input {...field} type={item.type} autoComplete='new-password' placeholder='' />
                                    </FormControl>
                                )}
                            </Field>
                        )}
                    </SimpleGrid>

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
export default UserPasswordForm