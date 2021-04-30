import { FormControl, FormHelperText, FormLabel } from '@chakra-ui/form-control';
import { Button, Input, Box, Stack, HStack, ButtonGroup, Center, Text, Divider, Alert, AlertIcon, AlertTitle, AlertDescription, SimpleGrid } from '@chakra-ui/react';
import React, { FunctionComponent, useState } from 'react'
import { Transition } from 'react-transition-group';
import GoogleLoginButton from './LoginButtons/Google';
import axios from 'axios'
import FacebookLoginButton from './LoginButtons/Facebook';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { Field, Form, Formik } from 'formik';
import { authenticationService } from '../../Service/auth'
import * as yup from 'yup';
import { ArrowBackIcon } from '@chakra-ui/icons';

type props = {
    onCancel: Function
}

const duration = 300;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out, transform ${duration}ms ease-in-out, max-height ${duration}ms ease-in-out`,
    opacity: 0,
    transform: `translateY(-20px)`,
    pointerEvents: 'none'
}

const transitionStyles = {
    entering: {
        maxHeight: 0,
        opacity: 1,
        transform: `translateY(0)`
    },
    entered: {
        maxHeight: '1000px',
        opacity: 1,
        transform: `translateY(0)`,
        pointerEvents: `auto`
    },
    exiting: { opacity: 0, maxHeight: 0 },
    exited: { opacity: 0, maxHeight: 0 },
}

const LoginForm: FunctionComponent<props> = ({ onCancel, onLogin }) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [isError, setIsError] = useState(false)

    const handleLoginThirdParty = (email) => {

        console.log(email)
        // authenticationService.login( email )
        // axios.post(
        //     `${process.env.API_URL}/user/login/`,
        //     {
        //         "email": email
        //     }
        // ).then(response => console.log(response.data))

    }

    const handleLoginStandard = ({ email, password }) => {
        console.log(
            email, password
        )
        authenticationService.loginEmailPassword(email, password)
            .catch((error) => {
                // Error 😨
                setIsError(true)
                if (error.response) {
                    /*
                     * The request was made and the server responded with a
                     * status code that falls out of the range of 2xx
                     */
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    /*
                     * The request was made but no response was received, `error.request`
                     * is an instance of XMLHttpRequest in the browser and an instance
                     * of http.ClientRequest in Node.js
                     */
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request and triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            })
        // authenticationService.login( email )
        // axios.post(
        //     `${process.env.API_URL}/user/login/`,
        //     {
        //         "email": email
        //     }
        // ).then(response => console.log(response.data))

    }

    const responseFacebook = (response) => {
        console.log(response)
    }
    return (
        // <Center h='calc(100vh - 100px)'>
        <Stack
            bg='white'
            p={{ base: 4, lg: 6 }}
            spacing={{ base: 2, lg: 4 }}
        >



            <SimpleGrid columns={{ base: 1, lg: 2 }} gap={5} w='full'>
                <GoogleLoginButton
                    handleLogin={(user) => handleLoginThirdParty(user.email)}
                />
                <FacebookLogin
                    appId={process.env.FACEBOOK_APP_ID}
                    fields="name,email,picture"
                    autoLoad={false}
                    callback={(response) => handleLoginThirdParty(response.email)}
                    render={renderProps => (
                        <Button
                            onClick={renderProps.onClick}
                            border='solid 1px'
                            borderColor='facebook.700'
                            borderRadius='2px'
                            isLoading={renderProps.isProcessing}
                        >
                            Via Facebook
                        </Button>)}
                />

            </SimpleGrid>

            <Divider transform='translateY(50px)' />

            <Center
                py={2}
            >
                <Center

                >
                    <Center
                        bg='white'
                        border='solid 1px'
                        borderColor='gray.100'
                        borderRadius='full'
                        w='50px'
                        h='50px'
                        p={1}
                        position='relative'
                        zIndex='banner'

                    >
                        ou
                        </Center>
                </Center>
            </Center>

            {isError ?
                <Alert
                    status="error"
                    variant="subtle"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    textAlign="center"
                    height="200px"
                >
                    <AlertIcon boxSize="40px" mr={0} />
                    <AlertTitle mt={4} mb={1} fontSize="lg">
                        Problème d'identification !
                        </AlertTitle>
                    <AlertDescription maxWidth="sm">
                        Ce compte n'existe pas ou alors le mot de passe est erroné.
                            {' '}<Button variant='link' onClick={() => onCancel()}>Ré-essayez ou créez un compte</Button>
                            .
                        </AlertDescription>
                </Alert>
                : null}

            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                onSubmit={(values, { setSubmitting }) => {
                    handleLoginStandard(values)
                    // setTimeout(() => {

                    //     alert(JSON.stringify(values, null, 2));
                    //     setSubmitting(false);
                    // }, 400);
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

                        <Stack
                            spacing={{ base: 4, lg: 6 }}
                        >
                            <FormControl>
                                <FormLabel>Email : </FormLabel>
                                <Field name='email'>
                                    {({ field, form }) => (
                                        <Input
                                            {...field}
                                            autoComplete='username'
                                            variant='flushed'
                                            placeholder='email@mail.com'
                                            type='email'
                                        />
                                    )}
                                </Field>
                            </FormControl>

                            <FormControl>
                                <FormLabel>Password :</FormLabel>

                                <Field name='password'>
                                    {({ field, form }) => (
                                        <Input
                                            {...field}
                                            autoComplete='current-password'
                                            variant='flushed'
                                            type='password'
                                            placeholder='************'
                                        />
                                    )}
                                </Field>
                                <FormHelperText>
                                    <Button size='sm' variant='link' fontWeight='normal' justifyContent='flex-end' w='100%'>
                                        Mot de passe oublié ?
                                                    </Button>
                                </FormHelperText>
                            </FormControl>

                            <Box>
                                <Button
                                    bg='rgb(102, 135, 138)'
                                    color='white'

                                    type='submit'
                                    w='100%'
                                >
                                    Valider
                                    </Button>
                            </Box>
                        </Stack>
                    </Form>
                )}
            </Formik>
            <Box>
                <Button

                    variant='link' onClick={() => onCancel()}> <ArrowBackIcon /> Retour</Button>

            </Box>
        </Stack>
        // </Center>
    )
}

export default LoginForm