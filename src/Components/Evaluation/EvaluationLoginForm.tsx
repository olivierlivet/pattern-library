import React, { useState, useEffect } from 'react'
import { Link as GatsbyLink, navigate } from 'gatsby'

import {
    Box,
    Button,
    Center,
    Heading,
    Stack,
    Text,
    SimpleGrid,
    Spinner
} from '@chakra-ui/react'

import { authenticationService } from '../../Service/auth'
import FastLoginForm from '../FastLoginForm'
import LoginForm from '../Account/Login'
import CreateAccountForm from '../Account/CreateAccountForm'

import axios from 'axios'
import { config } from '../../config'
const EvaluationLoginForm = ({ evaluationId }) => {
    const [user, setUser] = useState()
    const [currentModule, setCurrentModule] = useState('choice');

    useEffect(() => {
        checkUserAuth()
    }, []);

    const checkUserAuth = () => {
        const user = authenticationService.getUser()
        if (!user) {
            // navigate('/fr/compte/login')
            setUser(user)
        }else{
            console.log( user )
            handleAddUserToRecord( user )
            // navigate(`/fr/contribution/inspiration/${ productId }`)
        }
    }

    const handleAddUserToRecord = ( userId ) => {
        if( userId ){
            axios.put(
                `${config.apiUrl}/evaluation/${evaluationId}`,
                {
                    user: userId
                }
            ).then(( response )=>
                // console.log( response.data )
                navigate(`/fr/contribution/inspiration/${response.data.product}`)
            )
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

                <Stack>
                <Heading
                    fontSize={{ base: 'xl', lg: 'x-large' }}
                    fontWeight='normal'
                    textAlign='center'
                    py={{ base: 6, lg: 10 }}
                    px={{ base: 0, lg: 10 }}
                >
                    Pour enregistrer vos retours sur ce patron il faut que vous vous identifiez 🔒
                </Heading>
                <Text textAlign='center' fontSize='sm' color='gray.500'>En plus ça permettra de vous offrir des points de fidelité 😉</Text>
                <Box
                    bg='white'
                >
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
                                        onLogin={(userId) => {
                                            onUserAuth(userId)
                                        }}
                                        onCancel={() => setCurrentModule('choice')}
                                    />
                                    :
                                    <LoginForm
                                        // onLogin={(user) => { handleAddUserToRecord( user.userId ) }}
                                        onLogin={(user) => { handleAddUserToRecord( user.userId ) }}
                                        onCancel={() => setCurrentModule('choice')}
                                    />
                            }

                        </>
                        : <Center><Spinner size="sm" /></Center>}
                </Box>

                </Stack>



            </Box>
        </Box>

    )
}

export default EvaluationLoginForm