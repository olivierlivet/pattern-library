import React from 'react'

import {
    Box,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Heading,
    Text,
    VStack,
    FormControl,
    FormLabel,
    Input
} from '@chakra-ui/react'

const DownloadModal = ({ isVisible, onClose }) => {
    return (
        <Modal
            isOpen={isVisible}
            onClose={onClose}
            isCentered={ true }
            size='2xl'
        >
            <ModalOverlay bg='rgba(200,0,0, .2)' />
            <ModalContent>
                <ModalHeader>
                    <Heading
                        fontWeight='normal'
                        fontSize='2xl'
                    >
                        Téléchargement de votre patron «Jupe Rita»
              </Heading>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <VStack spacing={4}>
                        <Text color='gray.600'>Vous êtes sur le point de télécharger le patron <Text as='span' borderBottom='solid 2px' borderBottomColor='brand.pink.400'>Jupe Rita</Text> pour démarrer un super projet.</Text>
                        <Text color='gray.600'>Avant cela, il est important que vous sachiez que les patrons de la République du Chiffon sont téléchargeables 3 fois. Cela permet d'assurer à leur éditrice que ses créations sont distribuées avec soin.</Text>
                        <Text color='gray.600'>Ainsi, soyez attentive et consciente que ces téléchargements n'étant pas illimités, vous devez de votre côté l'archiver personnelement dans vos documents.</Text>

                            <Button
                                bg='brand.pink.400'
                                color='white'
                                _hover={{
                                    bg:'brand.pink.300'
                                }}
                            >Je télécharge la patron pour la 1<Text as='sup'>ère </Text>{' '}fois</Button>
                            <Text fontSize='sm'>(et il me restera 2 téléchargements après celui-ci)</Text>

                    {/* <FormControl>
                        <FormLabel fontSize='lg'>
                            Pour déclencher le téléchargement, écrivez
                            {' '}<Text>Rita</Text>
                            {' '}dans le champs ci-dessous :
                        </FormLabel>
                        <Input variant='flushed' placeholder='Saisir ici' />
                    </FormControl>
                    <Box>
                        <Button type='submit'>Télécharger</Button>

                    </Box> */}

                    </VStack>

                </ModalBody>

                <ModalFooter>
                    
                    <Button
                        onClick={onClose}
                        variant="ghost"
                    >
                            Retour
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default DownloadModal