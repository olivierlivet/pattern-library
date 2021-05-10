import React, { FunctionComponent } from 'react'
import './modal.css'
type productCardPropsTypes = {
    product: any,
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
import ProductPage from './ProductPage'

const ProductCardLarge: FunctionComponent<productCardPropsTypes> = ({
    product,
    title,
    onClose
}) => {
    return (

        <Modal
            isOpen={true}
            size='full'
            onClose={() => onClose()}
            motionPreset="slideInBottom"
            id={`modal-product-detail`}


        >
            <ModalContent>
                <ModalBody
                    my={'0'}
                    px='0'
                    mx='0'

                    py='0'
                    my='0'
                    marginTop='0'
                    borderRadius='0'
                >
                    {/* <Button
                        onClick={() => onClose()}
                    >Retour</Button> */}

                    {/* <pre>
                        { JSON.stringify( product, null, 1 )}
                    </pre> */}

                    <ProductPage
                        data={ product.fields ? product.fields : product }
                        onClose={()=>onClose()}
                        displayCloseButton={ true }
                    />

                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default ProductCardLarge