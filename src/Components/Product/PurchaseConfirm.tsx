
import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

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
import { navigate } from '@reach/router'

const PurchaseConfirm = ({ onClose }) => {
    return (
        <Modal
            isOpen={true}
            onClose={() => onClose()}
            size={'md'}
        >
            <ModalOverlay />
            <ModalContent
                overflow='hidden'

                w={{ base: '100vw', lg: 'auto' }}
                minH={{ base: '100vh', lg: 'auto' }}

                m={{ base: 0, lg: 'auto' }}
                borderRadius={{ base: 0, lg: 'xl' }}
            >
                <ModalHeader
                    bg='gray.50'
                    borderBottom='solid 1px'
                    borderBottomColor='gray.100'
                >
                <Heading
                        as='p'
                        fontWeight='normal'
                        fontSize={{ base:'lg', lg:'xl'}}
                    >
                        Félicitations !
                    </Heading>
                </ModalHeader>
                {/* <ModalCloseButton /> */}
                <ModalBody
                    p={4}
                >

                    Votre patron a bien été ajouté à votre panier, souhaitez-vous :
                    <ButtonGroup>
                        <Button onClick={()=>onClose()}>Continuer vos achats</Button>
                        <Button as={GatsbyLink} to='/fr/compte/cart'>Finaliser la commande</Button>
                    </ButtonGroup>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default PurchaseConfirm