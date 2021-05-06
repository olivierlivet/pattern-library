import { FormControl, FormErrorMessage, FormHelperText, FormLabel } from '@chakra-ui/form-control';
import { Button, Input, Box, Stack, HStack, ButtonGroup, Center, Text, Divider, SimpleGrid, AlertDialog, Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react';
import React, { FunctionComponent, useState } from 'react'
import { Transition } from 'react-transition-group';
import GoogleLoginButton from './LoginButtons/Google';
import axios from 'axios'
import FacebookLoginButton from './LoginButtons/Facebook';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { Field, Form, Formik } from 'formik';
import { authenticationService } from '../../Service/auth'
import { config } from '../../config';
import * as yup from 'yup';
import { ArrowBackIcon } from '@chakra-ui/icons';

type props = {
    handleLoggedIn: Function,
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

const CreateAccountForm: FunctionComponent<props> = ({  onCancel, onLogin }) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [isError, setIsError] = useState(false)

    const handleCreateAccount = (values) => {
        console.log(values)
        axios.post(
            `${config.apiUrl}/user`,
            values
        ).then((response) => {
            localStorage.setItem('tpcUser', JSON.stringify(response.data));
            onLogin(response.data.userId)
        })
    }

    const handleCreateAccountPasswordLess: FunctionComponent = (firstName: String, email: String, pictureUrl: String, source:String) => {
        axios.post(
            `${config.apiUrl}/user/password-less`,
            {
                email: email,
                firstName: firstName,
                profilePictureUrl: pictureUrl,
                source: source
            }
        ).then((response) => {
            localStorage.setItem('tpcUser', JSON.stringify(response.data));
            onLogin( response.data.userId )
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

    return (
        <>
            <Stack
                bg='white'
                p={{ base: 6, lg: 6 }}
                spacing={{ base: 4, lg: 4 }}
            >
                <HStack>
                    <SimpleGrid columns={{ base: 1, lg: 2 }} gap={5} w='full'>
                        <GoogleLoginButton
                            handleLogin={(user) => handleCreateAccountPasswordLess( user.givenName, user.email, user.imageUrl, 'google')}
                            // handleLogin={(user) => console.log( user )}
                        />
                        <FacebookLoginButton
                             handleLogin={(user) => handleCreateAccountPasswordLess( user.name, user.email, user.picture.data.url, 'facebook') }
                        />
                    </SimpleGrid>
                </HStack>


                <Divider transform='translateY(50px)' />

                <Center
                    py={2}
                >
                    <Center>
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
                            Ce compte existe déjà !
                        </AlertTitle>
                        <AlertDescription maxWidth="sm">
                            Une erreur s'est produite, il semble qu'un compte avec cette adresse email existe déjà,
                            <Button variant='link' onClick={()=>onCancel()}>essayez de vous identifier</Button>
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
                        handleCreateAccount(values)
                    }}
                    validationSchema={
                        yup.object().shape({
                            firstname: yup.string().required('Champ obligatoire').nullable(),
                            email: yup.string().email('La syntaxe semble erronée').required('Champ obligatoire').nullable(),
                            password: yup.string().required('Champ obligatoire').min(6, '6 caractères mini svp').nullable(),
                            passwordConfirmation: yup.string().required('Champs obligatoire svp').oneOf([yup.ref('password'), null], 'Il ne correspond pas :/')
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
                        <Form>

                            <Stack
                                spacing={{ base: 6, lg: 6 }}
                            >
                                <SimpleGrid
                                    columns={{ base: 1, lg: 2 }}
                                    gap={{ base: 6, lg: 2 }}
                                >
                                    <Field name='firstname'>
                                        {({ field, form }) => (
                                            <FormControl isInvalid={form.errors.firstname && form.touched.firstname}>
                                                <FormLabel color='gray.600'>Prénom : </FormLabel>
                                                <Input
                                                    {...field}
                                                    type='text'
                                                    variant='flushed'
                                                />
                                                <FormErrorMessage>{form.errors.firstname}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                    <Field name='email'>
                                        {({ field, form }) => (
                                            <FormControl isInvalid={form.errors.email && form.touched.email}>
                                                <FormLabel color='gray.600'>Email : </FormLabel>
                                                <Input
                                                    {...field}
                                                    placeholder='email@mail.com'
                                                    type='email'
                                                    variant='flushed'
                                                />
                                                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                            </FormControl>
                                        )}

                                    </Field>

                                </SimpleGrid>

                                <SimpleGrid
                                    columns={{ base: 1, lg: 2 }}
                                    gap={{ base: 6, lg: 2 }}
                                >
                                    <Field name='password'>
                                        {({ field, form }) => (
                                            <FormControl isInvalid={form.errors.password && form.touched.password}>
                                                <FormLabel color='gray.600'>Mot de passe : </FormLabel>
                                                <Input
                                                    {...field}
                                                    autoComplete='new-password'
                                                    type='password'
                                                    placeholder='************'
                                                    variant='flushed'
                                                />
                                                <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                    <Field name='passwordConfirmation'>
                                        {({ field, form }) => (
                                            <FormControl isInvalid={form.errors.passwordConfirmation && form.touched.passwordConfirmation}>
                                                <FormLabel color='gray.600'>Confirmation de mot de passe : </FormLabel>
                                                <Input
                                                    {...field}
                                                    autoComplete='new-password'
                                                    type='password'
                                                    placeholder='************'
                                                    variant='flushed'
                                                />
                                                <FormErrorMessage>{form.errors.passwordConfirmation}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                </SimpleGrid>

                                <Box>
                                    <Button
                                        bg='rgb(102, 135, 138)'
                                        color='white'

                                        type='submit'
                                        w='100%'
                                        isDisabled={
                                            !(
                                                errors // 👈 null and undefined check
                                                && Object.keys(errors).length === 0 && errors.constructor === Object
                                            )
                                        }

                                        _hover={{
                                            bg:'#465e61'
                                        }}
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
        </ >
    )
}

export default CreateAccountForm