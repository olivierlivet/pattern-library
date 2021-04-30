import React, { useState, useEffect } from 'react'
import { Link as GatsbyLink } from 'gatsby'

import {
    Box,
    Button,
    Center,
    Heading,
    Link,
    Stack,
    Text,
    SimpleGrid,
    Spinner
} from '@chakra-ui/react'

import {authenticationService} from '../../Service/auth'
import FastLoginForm from '../FastLoginForm'
import LoginForm from '../Account/Login'
import CreateAccountForm from '../Account/CreateAccountForm'


import { Router, Link as NavLink, Match } from "@reach/router";
import AccountWrapper from './Wrapper';
import Form from '../Evaluation/Form'
import { Formik } from 'formik';
const EvaluationLoginForm = ({ productId }) => {
    const [ user, setUser ] = useState()
    const [currentModule, setCurrentModule] = useState('choice');

    useEffect(() => {
        checkUserAuth()
  }, []);

    const checkUserAuth = () => {
      const user = authenticationService.getUser()
      if( !user ){
          // navigate('/fr/compte/login')
          setUser(user)
      }
    }

    return (

        <Box
            minH='100vh'
            py={{ base: 6, lg: 24 }}
            px={{ base: 8, lg: 0 }}
        >
            <Box
                mx='auto'
                w={{ base: 'full', lg: '3xl' }}
            >


<Heading
                            fontSize={{ base: 'xl', lg: 'x-large' }}
                            fontWeight='normal'
                            textAlign='center'
                            py={{ base: 6, lg: 10 }}
                            px={{ base: 0, lg: 10 }}
                            >
                                Pour enregistrer vos retours sur ce patron il faut que vous vous identifiez :
                            </Heading>





                <Box>
                    {!user ?
                        <>

                            {currentModule === 'choice' ?
                                <Stack
                                    p={{ base: 0, lg: 6 }}
                                    spacing={{ base: 3, lg: 4 }}
                                >

                                    <SimpleGrid
                                        gap={2}
                                        columns={{ base: 1, lg: 2 }}

                                    >
                                        <Button onClick={() => setCurrentModule('loginForm')} w='full'>J'ai déjà un compte</Button>
                                        <Button onClick={() => setCurrentModule('createAccountForm')} w='full'>Je créé un compte</Button>
                                    </SimpleGrid>

                                </Stack>

                                : currentModule === 'createAccountForm' ?

                                    <CreateAccountForm
                                        handleLoggedIn={(userId) => {
                                            onUserAuth(userId)
                                        }}
                                        onCancel={() => setCurrentModule('choice')}
                                    />
                                    :
                                    <LoginForm
                                        onLogin={(userId) => { setFieldValue }}
                                        onCancel={() => setCurrentModule('choice')}
                                    />
                            }

                        </>
                        : <Center><Spinner size="sm" /></Center>}
                </Box>





            </Box>
        </Box>

    )
}

export default EvaluationLoginForm