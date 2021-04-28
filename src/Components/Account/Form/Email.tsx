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
    Text
} from '@chakra-ui/react'


import { Field, Form, Formik } from 'formik';

const UserProfileForm = ({}) => {

    const questions = [
        {
            name: 'email',
            label: 'Email',
            type: 'email'
        },
        {
            name: 'emailConfirmation',
            label: 'Confirmation',
            type: 'email'
        }

    ]

    return(
        <Formik
                initialValues={{
                    firstName: 'Olivier'
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



                        <pre>
                            {JSON.stringify(values, null, 1)}
                        </pre>
                    </Form>
                )}

            </Formik>
    )
}
export default UserProfileForm