import React, { FunctionComponent } from 'react'
import './modal.css'
type productCardPropsTypes = {
    product: object,
    title: string,

    onOpen(): Function,
    onClose(): Function
}

import { StaticImage } from 'gatsby-plugin-image'
import {
    Box,
    Heading,
    Grid,
    Text,
    Button
} from '@chakra-ui/react'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
} from "@chakra-ui/react"

const ProductCardLarge: FunctionComponent<productCardPropsTypes> = ({
    product,
    title,
    onClose
}) => {
    return (

        <Modal
            isOpen={true}
            size='full'
            onClose={()=>onClose()}
            motionPreset="slideInBottom"
            id={`modal-product-detail`}


        >
            <ModalHeader>Heder</ModalHeader>
            <ModalCloseButton />
            <ModalContent>
                <ModalBody
                            my={'0'}
                   marginTop='0'
                   borderRadius='0'

                >
                    <Button
                        onClick={()=>onClose()}
                    >Retour</Button>


                    <Box
                        w='100%'
                        maxW='1100px'
                        mx='auto'
                        bg='white'
                    >
                        <Grid
                            templateColumns={{
                                base: '100%',
                                lg: '500px 1fr'
                            }}
                            gap={10}
                        >
                            <Box>
                                <StaticImage
                                    src='https://static-mapetitemercerie.o10c.net/88723-large_default/patron-l-enfant-roi-chemise-xavier-de-2-ans-a-12-ans.jpg'
                                    alt={product.title}
                                />
                            </Box>
                            <Box
                                p={5}
                            >
                                <Heading>{product.title}</Heading>
                                <Text>Level : {product.level}</Text>

                            </Box>
                        </Grid>
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default ProductCardLarge