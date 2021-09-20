import { config } from '../../config';
import { Link as GatsbyLink } from 'gatsby'
import { Button } from '@chakra-ui/button'
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Box, Center, Link, Stack, Text, Spinner } from '@chakra-ui/react'
import Title from '../Title'
import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import * as yup from 'yup';
import { authenticationService } from '../../Service/auth';

const RenewPasswordCreate = ({ token }) => {

    const [user, setUser] = useState(false)

    useEffect(() => {
        axios.get(`${config.apiUrl}/user/password-token/${token}`, { token: token })
            .then(response => setUser(response.data))
    }, [])

    const handleSubmit = (values) => {

        console.log(values)
        axios.post(
            `${config.apiUrl}/user/new-password-creation`,
            values
        ).then((response) => {
            console.log(response)
        })
    }

    return (
        <Box
            px={{ base: 10, lg: 0 }}
        >
            {/* RENEW PASSWORD */}
            <Center
                minH='calc(100vh - 50px)'
            >
                {user ?
                    <Box
                        w='lg'
                        bg='white'
                        p={{ base: 10, lg: 4 }}
                        borderRadius='4px'
                    >


                        <Formik
                            initialValues={{}}
                            validationSchema={yup.object().shape({
                                password: yup.string().min(8, '8 charactères minimum.. (pour plus de sécurité)').required("Ce champs est obligatoire"),
                                passwordConfirmation: yup.string().required("Ce champs est obligatoire").when("password", {
                                    is: val => (val && val.length > 0 ? true : false),
                                    then: yup.string().oneOf(
                                        [yup.ref("password")],
                                        "Les deux mots de passe ne sont pas identiques.. :/"
                                    )
                                })
                            })}
                            onSubmit={(values, { setSubmitting }) => {
                                handleSubmit(values);
                                // console.log('submit')
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
                                submitCount,
                                setFieldError,
                                setFieldValue,
                                setFieldTouched,
                                isValid
                            }) => (
                                <Form>
                                    {!isSubmitting ?
                                        <Stack
                                            spacing={{ base: 4, lg: 8 }}
                                        >

                                            <Title>
                                                {user.firstName}, saisissez votre nouveau mot de passe
                                            </Title>

                                            <Field name='password'>
                                                {({ field, form }) => (
                                                    <FormControl isInvalid={form.errors.password && form.touched.password}>
                                                        <FormLabel color='gray.600'>Nouveau mot de passe : </FormLabel>
                                                        <Input
                                                            {...field}
                                                            type='password'
                                                            variant='flushed'
                                                            autocomplete="new-password"
                                                        />
                                                        <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                                                    </FormControl>
                                                )}

                                            </Field>

                                            <Field name='passwordConfirmation'>
                                                {({ field, form }) => (
                                                    <FormControl isInvalid={form.errors.passwordConfirmation && form.touched.passwordConfirmation}>
                                                        <FormLabel color='gray.600'>Le même pour être sûr ;) </FormLabel>
                                                        <Input
                                                            {...field}
                                                            type='password'
                                                            variant='flushed'
                                                            autocomplete="new-password"
                                                        />
                                                        <FormErrorMessage>{form.errors.passwordConfirmation}</FormErrorMessage>
                                                    </FormControl>
                                                )}

                                            </Field>

                                            <Button
                                                type='submit'
                                                colorScheme={isValid ? 'blue' : 'gray'}
                                                isDisabled={!isValid}
                                            >
                                                Envoyer
                                            </Button>

                                        </Stack>
                                        :
                                        <Stack space={4}>
                                            <Text color='green.400'>
                                                Votre mot de passe vient d'être sauvegardé, vous pouvez maintenant vous identifiez.
                                            </Text>
                                            <Box>
                                                <Link as={GatsbyLink} to='/fr/compte/login'>Identification →</Link>
                                            </Box>
                                        </Stack>
                                    }
                                </Form>
                            )}
                        </Formik>
                    </Box>
                    : <Spinner />}


            </Center>
        </Box>
    )
}

export default RenewPasswordCreate