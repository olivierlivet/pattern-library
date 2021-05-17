import React, { FunctionComponent, useEffect, useState } from 'react'

import {
    Box,
    Button,
    Flex,
    Text,
    Stack,
    Grid,
    Heading,
    Center,
    VStack,
    HStack
} from '@chakra-ui/react'

import { useContentful } from 'react-contentful';
import { navigate } from 'gatsby';
import { config } from '../../config';
import { authenticationService } from '../../Service/auth'
import axios from 'axios';
import GoToPaymentButton from './GoToPaymentButton';
import SmallProductImage from '../Image/SmallProduct';
import { CloseIcon, SmallCloseIcon } from '@chakra-ui/icons';


type props = {
    isOpen: Boolean
    products: Array<String>,
    hideButton: Boolean
}

interface IData {
    _id: string,
    products: [any]
}

const CartLargeSummary: FunctionComponent<props> = ({ products, isOpen, hideButton }) => {

    const [data, setData] = useState< IData | undefined >();
    useEffect(async () => {
        getData();
    }, []);

    const getData = async () => {
        const result = await axios.get(
            `${config.apiUrl}/cart/${authenticationService.getUser().userId}/created`
        );
        setData(result.data);
    }

    const handleDelete = (e, productId) => {
        e.stopPropagation();

        let currentProducts = data.products;
        let updatedProducts = []

        for (let index = 0; index < currentProducts.length; index++) {
            const element = currentProducts[index];
            if (element._id !== productId) {
                console.log('add product ');
                updatedProducts.push(element._id);
            }
        }
        axios.put(
            `${config.apiUrl}/cart/${data._id}`,
            { products: updatedProducts }
        ).then(() => getData())
    }

    const productsInCart = () => {
        if (!data) { return null }
        // Process and pass in the loaded `data` necessary for your page or child components.
        return (

            data.products.map((product, index) =>
                <Box
                    onClick={() => navigate(product.fields.slug)}
                    cursor='pointer'
                    borderTop='solid 1px'
                    borderTopColor={index !== 0 ? 'gray.50' : 'transparent'}
                    p={2}
                >
                    <Grid
                        templateColumns={{
                            base: `40px 1fr 120px`,
                            lg: `40px 1fr 150px`
                        }}
                        gap={{
                            base: 1,
                            lg: 2
                        }}
                    >
                        <SmallProductImage
                            label={product.title}
                            path={product.mainPicture}
                        />
                        <Flex
                            p={2}
                            alignItems='center'
                        >
                            <Heading as='p' fontWeight='normal' fontSize='sm'>
                                {product.title}
                            </Heading>

                        </Flex>
                        <HStack justify='flex-end'>
                            <Center>
                                <Text color='green.400'>{product.price}&nbsp;€</Text>
                            </Center>
                            <Button
                                onClick={(e) => handleDelete(e, product._id)}
                                variant='outline'
                                size='sm'
                            > 
                                <SmallCloseIcon />
                                <Text display={{ base: 'none', lg:'block'}}>Supprimer</Text>
                                
                            </Button>
                        </HStack>

                    </Grid>
                </Box>)
        );
    }

    const cartTotalAmount = () => {
        return (
            <Flex
                p={2}
                borderTop='solid 1px'
                borderTopColor='gray.100'
                justify='space-between'
            >
                <Text>
                    Total TTC
                </Text>
                <Text color='green.500'>36€</Text>
            </Flex>
        )
    }

    return (
        products ?
            <Stack spacing={2}>
                {/* <pre>
                    { JSON.stringify( products, null, 1 )}
                </pre> */}
                <Box>
                    {productsInCart()}
                    {/* {cartTotalAmount()} */}
                </Box>
                {!hideButton ?
                    <Button
                        w='full'
                        onClick={() => navigate('/fr/compte/cart')}

                        bg='brand.green.500'
                        color='white'
                        fontFamily='Noe display'
                        fontWeight='normal'
                        _hover={{
                            bg: 'brand.green.400'
                        }}
                    >
                        Passer commande
                    </Button>
                    : null}
                { data && data.products.length > 0 ? 
                    <GoToPaymentButton
                        cart={data}
                    />
                : null }
            </Stack>
            :
            <div>Votre panier est vide</div>
    )
}

export default CartLargeSummary