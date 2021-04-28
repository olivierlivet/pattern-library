import { FormControl, FormHelperText, FormLabel } from '@chakra-ui/form-control';
import { Button, Input, Box, Stack, HStack, ButtonGroup, Center, Text, Divider } from '@chakra-ui/react';
import React, { FunctionComponent, useState } from 'react'
import { Transition } from 'react-transition-group';
import GoogleLoginButton from './LoginButtons/Google';
import axios from 'axios'
import FacebookLoginButton from './LoginButtons/Facebook';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { Field, Form, Formik } from 'formik';
import {authenticationService} from '../../Service/auth'
type props = {

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

const LoginForm: FunctionComponent<props> = ({ }) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleLoginThirdParty = (email) => {
        authenticationService.login( email )
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
        <Center h='calc(100vh - 100px)'>
            <Stack
                bg='white'
                p={{ base: 4, lg: 6 }}
                spacing={{ base: 2, lg: 4 }}
            >


                <HStack>
                    <ButtonGroup>
                        <GoogleLoginButton
                            handleLogin={(user) => handleLogin(user.email)}
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

                    </ButtonGroup>
                </HStack>

                <Center
                    py={4}
                >
                    <Center

                    >
                        <Center
                            border='solid 1px'
                            borderColor='gray.100'
                            borderRadius='full'
                            w='50px'
                            h='50px'
                            p={1}

                        >
                            Ou
                        </Center>
                    </Center>

                </Center>


                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
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

                            <Stack
                                spacing={{ base: 4, lg: 6 }}
                            >
                                <FormControl>
                                    <FormLabel>Email : </FormLabel>
                                    <Field name='email'>
                                        {({ field, form }) => (
                                            <Input {...field} placeholder='email@mail.com' />
                                        )}
                                    </Field>
                                </FormControl>

                                <FormControl>
                                    <FormLabel>Password :</FormLabel>

                                    <Field name='password'>
                                        {({ field, form }) => (
                                            <Input
                                                {...field}
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
            </Stack>
        </Center>
    )
}

export default LoginForm