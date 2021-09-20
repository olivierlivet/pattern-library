import React, { FunctionComponent, useState } from 'react'

type props = {
  title: String,

  onClose: Function,
  onLogin: Function,
  onCancel: Function,
}

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
import LoginForm from './Account/Login'
import CreateAccountForm from './Account/CreateAccountForm'
import { ArrowBackIcon } from '@chakra-ui/icons'

const FastLoginForm: FunctionComponent<props> = (
  {
    title,
    onClose,
    onCancel,
    onLogin
  }) => {

  const [currentModule, setCurrentModule] = useState('choice');

  return (
    <Modal
      isOpen={true}
      onClose={() => onClose()}
      size={'xl'}
      blockScrollOnMount={ true }
    >
      <ModalOverlay />
      <ModalContent
        overflow='hidden'

        w={{ base: '100vw', lg: 'auto' }}
        minH={{ base: '100vh', lg: 'auto' }}

        m={{ base: 0, lg: 'auto' }}
        borderRadius={{ base: 0, lg: 'xl' }}
      >
        {/* <ModalHeader>Pour enregistrer vos favoris, créer un compte :</ModalHeader> */}
        {/* <ModalCloseButton /> */}
        <ModalBody
          p={0}

        >
          <Box
            bg='gray.50'
            borderBottom='solid 1px'
            borderBottomColor='gray.100'
            p={{ base: 6, lg: 6 }}
          >
            <Heading
              fontWeight='normal'
              fontSize={{ base: 'xl', lg: 'xl' }}
              mb={2}
            >
              { title ? title :
                  currentModule === 'choice' ?
                  `Pour ajouter des favoris, créez un compte ou identifiez-vous`
                  :
                  `Vous pouvez utiliser votre compte Facebook, Google ou votre adresse email.`
              }
            </Heading>
            {currentModule === 'choice' ?
              <Text
                color='gray.600'
                letterSpacing='wider'
              >En plus, vous accéderez à plein d'autres avantages</Text>
              : null}
          </Box>

          {currentModule === 'choice' ?
            <Stack
              p={{ base: 10, lg: 6 }}
              spacing={{ base: 3, lg: 4 }}
            >

              <SimpleGrid
                gap={2}
                columns={{ base:1, lg:2}}
              >
                <Button onClick={() => setCurrentModule('loginForm')} w='full'>J'ai déjà un compte</Button>
                <Button onClick={() => setCurrentModule('createAccountForm')} w='full'>Je créé un compte</Button>
              </SimpleGrid>

              <Box>
                <Button
                  variant='link'
                  onClick={() => onCancel()}
                >
                  <ArrowBackIcon />
                  Retour
                </Button>
              </Box>
            </Stack>

            : currentModule === 'createAccountForm' ?

              <CreateAccountForm
                onLogin={(user) => {
                  onLogin(user);
                  onClose();
                }}
                onCancel={() => setCurrentModule('choice')}
              />
              :
              <LoginForm
                onLogin={( user ) => {
                  console.log( user )
                  onLogin( user );
                  onClose();
                } }
                onCancel={() => setCurrentModule('choice') }
              />
          }

          {/* <LoginForm /> */}
          {/* <Button
            onClick={() => onUserAuth('1234556')}
          >
            Click
                </Button> */}

        </ModalBody>

      </ModalContent>
    </Modal>
  )
}

export default FastLoginForm
