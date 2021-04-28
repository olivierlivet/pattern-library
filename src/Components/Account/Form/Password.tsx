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

const UserPasswordForm = ({}) => {

    const questions = [
        {
            name: 'password',
            label: 'Mot de passe',
            type: 'password'
        },
        {
            name: 'password',
            label: 'Confirmation de mot de passe',
            type: 'passwordConfirmation'
        },

    ]

    return(
        <Formik
                initialValues={{
                    password: 'azeaeazeza'
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
export default UserPasswordForm