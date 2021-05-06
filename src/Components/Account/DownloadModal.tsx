import React, { FunctionComponent } from 'react'

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
import axios from 'axios'
import { config } from '../../config'

type props = {
    isVisible: Boolean,
    onClose: Function,
    data: Object
}

const DownloadModal:FunctionComponent<props> = ({ isVisible, onClose, data }) => {

    const handleDownload = () => {
        window.open(`${config.apiUrl}/sale/${data._id}/download`, '_blank');
        onClose();
    }

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
                        Téléchargement n°{data.download + 1}/3 de votre patron «{data.product.title}»
              </Heading>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {/* <pre>
                        { JSON.stringify( product, null, 1 )}
                    </pre> */}
                    <VStack spacing={4}>
                        <Text color='gray.600'>Vous êtes sur le point de télécharger votre patron <Text as='span' borderBottom='solid 2px' borderBottomColor='brand.pink.400'>{data.product.name}</Text> pour démarrer un super projet.</Text>
                        <Text color='gray.600'>Avant cela, il est important que vous sachiez que les patrons de la <Text as='span' borderBottom='solid 2px' borderBottomColor='green.300'>{ data.product.editor.name }</Text> sont téléchargeables 3 fois. Cela permet d'assurer à leur éditrice que ses créations sont transmises avec attention aux couturières.</Text>
                        <Text color='gray.600'>Ainsi, soyez attentive au fait que ces téléchargements n'étant pas illimités, il vous faut l'archiver de façon sûre dans vos documents.</Text>
                            <Button
                                // as={'a'}
                                // target='_blank'
                                // href={ `${config.apiUrl}/sale/${data._id}/download` }
                                onClick={ handleDownload }
                                bg='brand.pink.400'
                                color='white'
                                whiteSpace='pre-wrap'
                                h='auto'
                                p={2}
                                _hover={{
                                    bg:'brand.pink.300'
                                }}
                            >J'ai bien noté cela et je télécharge la patron pour la {data.download + 1}<Text as='sup'>ère </Text>{' '}fois</Button>
                            <Text fontSize='sm'>(et il me restera  {3 - 1}{' '}téléchargements après celui-ci)</Text>
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