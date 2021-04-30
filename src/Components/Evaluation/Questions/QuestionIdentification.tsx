import React, { FunctionComponent, useEffect, useState } from 'react'
import {authenticationService} from '../../../Service/auth'
import FastLoginForm from '../../FastLoginForm'
import LoginForm from '../../Account/Login'
import CreateAccountForm from '../..//Account/CreateAccountForm'

import {
    Button,
    Box,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Heading,
    Text,
    ButtonGroup,
    Center,
    Flex,
    Stack,
    SimpleGrid
  } from "@chakra-ui/react"

import { ArrowBackIcon } from '@chakra-ui/icons'

type props = {
    setFieldValue: Function
}

const QuestionIdentification:FunctionComponent<props> = (
    {
        setFieldValue
    }) => {
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

    return(
        <Box>
            { !user ?
            <>
                <Text textAlign='center'>Pour enregistrer vos retours sur ce patron il faut que vous vous identifiez :</Text>
                
                {currentModule === 'choice' ?
            <Stack
              p={{ base: 0, lg: 6 }}
              spacing={{ base: 3, lg: 4 }}
            >

              <SimpleGrid
                gap={2}
                columns={{ base:1, lg:2}}

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
                onLogin={(userId) => { setFieldValue } }
                onCancel={() => setCurrentModule('choice')}
              />
          }

                </>
            : null}
        </Box>
    )
}
export default QuestionIdentification