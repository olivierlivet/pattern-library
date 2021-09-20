import { FormControl, FormErrorMessage, FormHelperText, FormLabel } from '@chakra-ui/form-control';
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
import { Link as RouterLink } from '@reach/router'

type props = {
    onCancel: Function,
    onLogin: Function
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
        authenticationService.loginThirdParty(email)
        .then((response) => {
            localStorage.setItem('tpcUser', JSON.stringify( response.data ));
            console.log( response )
            onLogin( response.data );
        })
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
    }

    const handleLoginStandard = ({ email, password }) => {
        authenticationService.loginEmailPassword(email, password)
            .then((response) => {
                localStorage.setItem('tpcUser', JSON.stringify( response.data ));
                onLogin( response.data );
            })
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
                    // handleLogin={(user) => console.log('GOOGLE LOGIN HANDLE')}

                />
                <FacebookLoginButton
                    handleLogin={(user) => handleLoginThirdParty(user.email)}
                    // handleLogin={(user) => console.log('FACEBOOK LOGIN HANDLE')}


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

                validationSchema={
                    yup.object().shape({
                        email: yup.string().email('La syntaxe semble erronée').required('Champ obligatoire').nullable(),
                        password: yup.string().required('Champ obligatoire').min(6, 'Votre mot de passe fait au moins 6 caractères').nullable(),
                    })
                }

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

                            <Field name='email'>
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.email && form.touched.email}>
                                        <FormLabel color='gray.600'>Email : </FormLabel>
                                        <Input
                                            {...field}
                                            autoComplete='username'
                                            variant='flushed'
                                            placeholder='email@mail.com'
                                            type='email'
                                        />
                                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>



                            <Field name='password'>
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.password && form.touched.password}>
                                        <FormLabel color='gray.600'>Mot de passe : </FormLabel>
                                        <Input
                                            {...field}
                                            autoComplete='current-password'
                                            variant='flushed'
                                            type='password'
                                            placeholder='************'
                                        />
                                        <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>

                            <Button
                                as={RouterLink}
                                to='/fr/compte/new-password'
                                size='sm' variant='link' fontWeight='normal' justifyContent='flex-end' w='100%'>
                                Mot de passe oublié ?
                            </Button>
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