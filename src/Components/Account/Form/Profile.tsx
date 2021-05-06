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
import axios from 'axios';
import { config } from '../../../config';

const UserProfileForm = ({ data }) => {

    const toast = useToast()

    const questions = [
        {
            name: 'firstName',
            label: 'Prénom',
            type: 'text'
        },
        // {
        //     name: 'lastName',
        //     label: 'Nom',
        //     type: 'text'
        // }
    ]

    return (
        <Formik
            initialValues={data}
            onSubmit={(values, { setSubmitting }) => {
                axios.put(
                    `${config.apiUrl}/user/${data._id}`,
                    values
                )
                setTimeout(() => {
                    // alert(JSON.stringify(values, null, 2));
                    // setSubmitting(false);
                        toast({
                            title: "Profil modifié !",
                            description: "Votre profil a bien été modifié.",
                            status: "success",
                            duration: 5000,
                            isClosable: true,
                        });

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
                    <Stack spacing={{ base: 2, lg: 6 }}>
                        <SimpleGrid
                            columns={{ base: 1, lg: 2 }}
                            gap={{ base: 4, lg: 8 }}
                        >

                            {questions.map(item =>
                                <Field name={item.name}>
                                    {({ field, form }) => (
                                        <FormControl>
                                            <FormLabel>{item.label} :</FormLabel>
                                            <Input {...field} placeholder='' />
                                        </FormControl>
                                    )}
                                </Field>
                            )}
                        </SimpleGrid>
                        <Box
                            display={Object.keys(touched).length ? 'block' : 'none'}
                        >
                            <Button type='submit'>Enregistrer</Button>
                        </Box>
                    </Stack>

                </Form>
            )}

            

        </Formik>
    )
}
export default UserProfileForm