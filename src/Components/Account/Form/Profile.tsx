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
    Stack,
    Text
} from '@chakra-ui/react'


import { Field, Form, Formik } from 'formik';

const UserProfileForm = ({ data }) => {

    const questions = [
        {
            name: 'firstName',
            label: 'Prénom',
            type: 'text'
        },
        {
            name: 'lastName',
            label: 'Nom',
            type: 'text'
        }
    ]

    return(
        <Formik
                initialValues={ data }
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
                        <Stack spacing={{ base:2, lg:6 }}>

                        { questions.map(item =>
                            <Field name={item.name}>
                                {({ field, form }) => (
                                    <FormControl>
                                        <FormLabel>{item.label} :</FormLabel>
                                        <Input {...field} placeholder='' />
                                    </FormControl>
                                )}
                            </Field>
                        )}
                        <Box
                            display={ Object.keys(touched).length ? 'block' : 'none'}
                        >
                            <Button type='button'>Enregistrer</Button>
                        </Box>
                        </Stack>

                        



                        <pre>
                            {JSON.stringify(touched, null, 1)}
                        </pre>
                    </Form>
                )}

            </Formik>
    )
}
export default UserProfileForm